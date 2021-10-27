import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { RegistracijaComponent } from './registracija/registracija.component';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrvagodinaComponent } from './prvagodina/prvagodina.component';
import { DrugagodinaComponent } from './drugagodina/drugagodina.component';
import { TrecagodinaComponent } from './trecagodina/trecagodina.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { fakeBackendProvider } from './_helpers';
import { JwtInterceptor } from './_helpers';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import {MatTableModule} from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    RegistracijaComponent,
    DashboardComponent,
    PrvagodinaComponent,
    DrugagodinaComponent,
    TrecagodinaComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    UserComponent
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
    NgbModule
    ],

    exports: [],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
