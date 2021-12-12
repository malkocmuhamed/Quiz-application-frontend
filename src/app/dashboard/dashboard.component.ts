import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from '../_models/course.model';
import { CourseService } from '../_services/course.service';
import { CourseQuizzesComponent } from '../course-quizzes/course-quizzes.component';
import { Quiz } from '../_models/quiz.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading = false;
  public courses: Course[];

  constructor(private courseService: CourseService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCoursesList();
  }

  getCoursesList() {
    this.loading = true;
    this.courseService.getAllCourses().subscribe(data => {
      this.courses = data;
    })
  }

  viewDetails(id: number): void {
    let course = this.courses.find(x => x.id == id);
    this.dialog.open(CourseQuizzesComponent, {
      width: '450px',
      data: {
        name: course.name
      }
    });
  }

}
