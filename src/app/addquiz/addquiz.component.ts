import { Component, OnInit } from '@angular/core';
import { Quiz } from '../_models/quiz.model';
import { QuizService } from '../_services/quiz.service';
import { Course } from '../_models/course.model';
import { CourseService } from '../_services/course.service';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent implements OnInit {

  quizModel = <Quiz>{};
  courses: Course[];
  loading = false;

  constructor(private quizService: QuizService, private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCoursesList();
  }

  getCoursesList() {
    this.loading = true;
    this.courseService.getAllCourses().subscribe(data => {
      this.courses = data;
    })
  }

  addQuiz(): void {
    this.quizService.postQuiz(this.quizModel).subscribe(
      data => {
        alert("Quiz basic info successfully added!");
      })
  }

  changeClient(event) {
    this.quizModel.id = Number(event.value);
  }


}
