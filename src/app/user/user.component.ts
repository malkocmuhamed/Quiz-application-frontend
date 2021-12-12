import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userModel = <User>{};

  constructor(private usersService: UserService) { }

  addUser(): void {
    this.usersService.postUser(this.userModel).subscribe(
      data => {
        alert("User successfully added!");
      })
  }

  radioGroupChange(event) {
    this.userModel.userTypeId = Number(event.value);
  }

}
