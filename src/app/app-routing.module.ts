import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddquizComponent } from './addquiz/addquiz.component';
import { AdminComponent } from './admin';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { QuizquestionsComponent } from './quizquestions/quizquestions.component';
import { ResultComponent } from './result/result.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'addquiz',
    component: AddquizComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path: 'quizquestions',
    component: QuizquestionsComponent
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
