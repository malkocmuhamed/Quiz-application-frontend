import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Course } from "../_models/course.model";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    courseUrl = environment.apiUrl + '/api/courses';

    constructor(private http: HttpClient) { }

    getAllCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(this.courseUrl);
    }
}