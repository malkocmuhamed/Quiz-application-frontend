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
    private authenticateUrl = environment.identityServerUrl + '/connect/token';
    userUrl = environment.apiUrl + '/api/users';

    constructor(
        private router: Router,
        private http: HttpClient,
        private localStorageService: LocalStorageService
    ) { }

    login(email: string, password: string) {
        let body = 'username=' + email + '&password=' + password + '&grant_type=password&client_id=QuizApp.Frontend&scope=openid+profile+offline_access+QuizApp.Frontend';
        let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = { headers: headers };

        return this.http.post<any>(this.authenticateUrl, body, options)
            .pipe(map(token => {
                this.localStorageService.setAccessToken(new IdentityServerToken(token));
                this.router.navigate(['/home'])
            }));
    }

    logout() {
        this.localStorageService.removeAccessToken();
        this.router.navigate(['/login']);
    }

    getLoggedInUserData() {
        return this.http.get<User>(this.userUrl + '/' + '-1');
    }
}