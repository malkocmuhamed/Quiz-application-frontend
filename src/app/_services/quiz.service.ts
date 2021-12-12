import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../_models/quiz.model';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class QuizService {

  quizUrl = environment.apiUrl + '/api/quizzes';

  constructor(private http: HttpClient) { }

  postQuiz(quiz: Quiz) {
    return this.http.post<any>(this.quizUrl, quiz);
  }

  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.quizUrl);
  }

}