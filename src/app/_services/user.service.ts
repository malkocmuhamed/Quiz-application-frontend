import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../_models/user.model";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

    userUrl = environment.apiUrl + '/api/users';

    constructor(private http: HttpClient) { }

    postUser(user: User) {
        return this.http.post<any>(this.userUrl, user);
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.userUrl);
    }

    deleteUser(id: number) {
        this.http.delete(this.userUrl + '/' + id).subscribe(data => {
            alert("User with ID " + id + ": Successfully removed!");
        });
    }

    getById(id: number) {
        return this.http.get<User>(this.userUrl + '/' + '6');
    }

}