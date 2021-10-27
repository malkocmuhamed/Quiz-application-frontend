import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Course } from "../_models/course.model";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    //  semesterUrl = environment.baseUrl + '/api/assigneduser';

    constructor(private _http: HttpClient) { }

    // postSemester(semester: Semester) {
    //     return this._http.post<any>(this.semesterUrl, semester);
    // }

    // getAllSemesters(): Observable<Semester[]> {
    //     return this._http.get<Semester[]>(this.semesterUrl);
    // }

    // deleteUser(id: number) {
    //     this._http.delete(this.usersUrl + '/' + id).subscribe(data => {
    //         alert("User with ID " + id + ": Successfully removed!");
    //     });     
    // }
}