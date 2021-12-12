import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user.service';
import { AddquizComponent } from '../addquiz/addquiz.component';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    loading = false;
    public users: User[];

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.getUsersList();
    }

    getUsersList() {
        this.loading = true;
        this.userService.getAllUsers().subscribe(data => {
            this.users = data;
            console.log(data);
        })
    }

    removeUser(id: number): void {
        let usersArray: User[] = Array.from(this.users);
        let index = usersArray.indexOf(usersArray.find(element => element.id == id));
        this.userService.deleteUser(id);
        this.users.splice(index, 1);
    }
}