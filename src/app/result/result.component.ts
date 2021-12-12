import { Component, OnInit } from '@angular/core';
import { QuizQuestionService } from '../_services/quizquestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public quizQuestionService: QuizQuestionService, private router: Router) { }

  ngOnInit() {
    if (parseInt(localStorage.getItem('qnProgress')) == 10) {
      this.quizQuestionService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizQuestionService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizQuestionService.qns = JSON.parse(localStorage.getItem('qns'));

      this.quizQuestionService.getAnswers().subscribe(
        (data: any) => {
          this.quizQuestionService.correctAnswerCount = 0;
          this.quizQuestionService.qns.forEach((e, i) => {
            if (e.answer == data[i])
              this.quizQuestionService.correctAnswerCount++;
            e.correct = data[i];
          });
        }
      );
    }
    else
      this.router.navigate(['/quizquestions']);
  }

  restart() {
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quizquestions']);
  }

}