import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user.model';
import { Role } from '../_models/role.model';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private authenticationService: AuthenticationService) { }
    public user: User;

    ngOnInit() {
        this.authenticationService
            .getLoggedInUserData()
            .subscribe(user => {
                this.user = user;
            });
    }

    get isAdmin() {
        return this.user && this.user.userTypeId == Role.Admin;
    }
    get isUser() {
        return this.user && this.user.userTypeId === Role.User;
    }

    logout() {
        this.authenticationService.logout();
        localStorage.setItem('qnProgress', "0");
        localStorage.setItem('qns', "");
        localStorage.setItem('seconds', "0");
    }

}
