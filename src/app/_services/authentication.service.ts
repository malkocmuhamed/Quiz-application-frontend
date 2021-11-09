import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IdentityServerToken } from '../_models/identity-server-token.model';
import { User } from "../_models/user.model";
import { LocalStorageService } from './local-storage.service';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    public token: Observable<User>;
    //private authenticateUrl = environment.apiUrl + '/api/users/authenticate';
    private authenticateUrl = environment.identityServerUrl + '/connect/token';

    constructor(
        private router: Router,
        private http: HttpClient,
        private localStorageService: LocalStorageService
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('token')));
        this.token = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }
    // public get userTypesValue(): UserTypes {
    //     return this.userSubject.value;
    // }

    login(email: string, password: string){ 
        let body = 'username=' + email + '&password=' + password + '&grant_type=password&client_id=QuizApp.Frontend&scope=openid+profile+offline_access+QuizApp.Frontend';
        let headers = new HttpHeaders ({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };

        return this.http.post<any>(this.authenticateUrl, body, options)
            .pipe(map(token => {
                this.localStorageService.setAccessToken(new IdentityServerToken(token));
                this.userSubject.next(token);


                this.router.navigate(['/home'])
            }));
    }

    logout() {
        this.localStorageService.removeAccessToken();
        //localStorage.removeItem('token');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}