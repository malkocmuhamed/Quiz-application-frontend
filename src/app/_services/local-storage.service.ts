import { Injectable } from '@angular/core';
import { IdentityServerToken } from '../_models/identity-server-token.model';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {  
    constructor() {}

    getAccessToken() {
        return localStorage.getItem('quizapp.accessToken');
    }
    
    getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }

    setAccessToken(identityServerToken: IdentityServerToken) {
        localStorage.setItem('quizapp.accessToken', identityServerToken.accessToken);
        localStorage.setItem('quizapp.tokenType', identityServerToken.tokenType);
        localStorage.setItem('quizapp.tokenExpiresIn', identityServerToken.expiresIn);
        localStorage.setItem('quizapp.refreshToken', identityServerToken.refreshToken);
    }

    removeAccessToken() {
        localStorage.removeItem('quizapp.accessToken');
        localStorage.removeItem('quizapp.tokenType');
        localStorage.removeItem('quizapp.tokenExpiresIn');
        localStorage.removeItem('quizapp.refreshToken');
    }
}