import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_services/authentication.service';
import { LocalStorageService } from '../_services/local-storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private localStorageService: LocalStorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = this.localStorageService.getAccessToken();
        console.log(accessToken);
        return next.handle(this.addAccessTokenToRequest(request));
    }

    addAccessTokenToRequest(request: HttpRequest<any>) {
        return request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + this.localStorageService.getAccessToken()
            }
        });
    }
}