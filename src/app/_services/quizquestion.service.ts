import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../_models/quiz.model';
import { Observable, throwError } from 'rxjs';
import { QuizQuestion } from '../_models/quizquestion.mode';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class QuizQuestionService {

  quizUrl = environment.apiUrl + '/api/quizzes';
  questionsUrl = environment.apiUrl + '/api/Questions';
  answersUrl = environment.apiUrl + '/api/Answers';
  updateoutputUrl = environment.apiUrl + '/api/UpdateOutput';

  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;

  constructor(private http: HttpClient) { }

  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  getQuestions() {
    return this.http.get(this.questionsUrl);
  }

  getAnswers() {
    var body = this.qns.map(x => x.Id);
    return this.http.post(this.answersUrl, body);
  }

}