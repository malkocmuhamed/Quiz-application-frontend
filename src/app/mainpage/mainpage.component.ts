import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  // loading = false;
    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        // this.loading = true;
        // this.userService.getAllUsers().pipe(first()).subscribe(users => {
        //     this.loading = false;
        this.getUsersList();
    }

    
    getUsersList(): void {
        this.userService.getAllUsers().subscribe(data => {
        this.users = data;
    })
    }
}

