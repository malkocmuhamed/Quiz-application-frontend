import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from "../_models/user.model";
import { UserTypes } from '../_models/usertypes.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    public token: Observable<User>;
    authenticateUrl = environment.apiUrl + '/api/users/authenticate';

    constructor(
        private router: Router,
        private http: HttpClient
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

    login(email: string, password: string){ // : Observable<void> {
        return this.http.post<any>(this.authenticateUrl, { email, password })
            .pipe(map(token => {
                //return this.setTokenInLocalStorage(token);

                // store user details and jwt token in local storage to keep user logged in between page refreshes
                
                localStorage.setItem('token',  JSON.stringify(token));
                this.userSubject.next(token);
                return token;
                
            }));
    }

    // setTokenInLocalStorage(token) {
    //     localStorage.setItem('token', token);
    // }

    // readToken() {
    //     return localStorage.getItem('token');
    // }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}