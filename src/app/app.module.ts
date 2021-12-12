import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { UserComponent } from './user/user.component';
import { MatRadioModule } from '@angular/material/radio';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseQuizzesComponent } from './course-quizzes/course-quizzes.component';
import { AddquizComponent } from './addquiz/addquiz.component';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { QuizquestionsComponent } from './quizquestions/quizquestions.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    DashboardComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    UserComponent,
    NavbarComponent,
    CourseQuizzesComponent,
    AddquizComponent,
    QuizquestionsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    NgbModule,
    MatRadioModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressBarModule
  ],

  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {

}
