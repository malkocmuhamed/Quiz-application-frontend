import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { NavbarComponent } from '../navbar/navbar.component';
import { User } from '../_models/user.model';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    user = <User>{};
    userFromApi = <User>{};

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
    }
}