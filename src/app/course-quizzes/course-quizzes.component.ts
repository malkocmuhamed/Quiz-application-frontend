import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Course } from '../_models/course.model';
import { QuizService } from '../_services/quiz.service';
import { Quiz } from '../_models/quiz.model';

@Component({
  selector: 'app-course-quizzes',
  templateUrl: './course-quizzes.component.html',
  styleUrls: ['./course-quizzes.component.css']
})
export class CourseQuizzesComponent implements OnInit {

  loading = false;
  public quizzes: Quiz[];


  ngOnInit(): void {
    this.getQuizzesList();
  }

  constructor(private quizService: QuizService, public dialogRef: MatDialogRef<CourseQuizzesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  getQuizzesList() {
    this.loading = true;
    this.quizService.getQuizzes().subscribe(data => {
      this.quizzes = data;
    })
  }

}
