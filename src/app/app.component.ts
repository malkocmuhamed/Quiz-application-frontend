// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'quizapp';
// }

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

 import { AuthenticationService } from './_services/authentication.service';
 import { User } from './_models/user.model';
 import { Role } from './_models/role.model';
 import { UserTypes } from './_models/usertypes.model';
@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
   })
export class AppComponent {
    user: User;
    usertypes: UserTypes;

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.token.subscribe(x => this.user = x);
    }

    get isAdmin() {
        return this.user  && this.user.role === 'Admin';
    }

    // get isUser() {
    //   return this.user  && this.user.role === 'User';
    // }

    logout() {
        this.authenticationService.logout();
    }
}