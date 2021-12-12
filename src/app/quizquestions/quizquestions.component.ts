import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuizQuestion } from '../_models/quizquestion.mode';
import { QuizQuestionService } from '../_services/quizquestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizquestions',
  templateUrl: './quizquestions.component.html',
  styleUrls: ['./quizquestions.component.css']
})
export class QuizquestionsComponent implements OnInit {

  constructor(private router: Router, public quizQuestionService: QuizQuestionService) { }

  public quizQuestions: QuizQuestion[];

  ngOnInit() {
    if (parseInt(localStorage.getItem('seconds')) > 0) {
      this.quizQuestionService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizQuestionService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizQuestionService.qns = JSON.parse(localStorage.getItem('qns'));
      if (this.quizQuestionService.qnProgress == 10)
        this.router.navigate(['/result']);
      else
        this.startTimer();
    }
    else {
      this.quizQuestionService.seconds = 0;
      this.quizQuestionService.qnProgress = 0;
      this.quizQuestionService.getQuestions().subscribe(
        (data: any) => {
          this.quizQuestionService.qns = data;
          this.startTimer();
          console.log(data);
        }
      );
    }
  }

  startTimer() {
    this.quizQuestionService.timer = setInterval(() => {
      this.quizQuestionService.seconds++;
      localStorage.setItem('seconds', this.quizQuestionService.seconds.toString());
    }, 1000);
  }

  answer(qID, choice) {
    this.quizQuestionService.qns[this.quizQuestionService.qnProgress].answer = choice;
    localStorage.setItem('qns', JSON.stringify(this.quizQuestionService.qns));
    this.quizQuestionService.qnProgress++;
    localStorage.setItem('qnProgress', this.quizQuestionService.qnProgress.toString());
    if (this.quizQuestionService.qnProgress == 10) {
      clearInterval(this.quizQuestionService.timer);
      this.router.navigate(['/result']);
    }
  }


}
