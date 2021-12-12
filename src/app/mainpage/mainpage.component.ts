import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsersList();
  }


  getUsersList(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }
}

