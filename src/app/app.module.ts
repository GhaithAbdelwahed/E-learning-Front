import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CraouselComponent } from './craousel/craousel.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CoursesComponent } from './courses/courses.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { FormateurListComponent } from './formateur-list/formateur-list.component';
import { CreateFormateurComponent } from './create-formateur/create-formateur.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';
import { ApprenantListComponent } from './apprenant-list/apprenant-list.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { TrainersLoginComponent } from './trainers-login/trainers-login.component';
import { FormationComponent } from './formation/formation.component';
import { CreateFormationComponent } from './create-formation/create-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { SendMailComponent } from './send-mail/send-mail.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CraouselComponent,
    SpinnerComponent,
    ServiceComponent,
    AboutComponent,
    CategoriesComponent,
    CoursesComponent,
    TeamComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    LogoutComponent,
    FormateurListComponent,
    CreateFormateurComponent,
    UpdateFormateurComponent,
    ApprenantListComponent,
    CoursesListComponent,
    TrainersLoginComponent,
    FormationComponent,
    CreateFormationComponent,
    UpdateFormationComponent,
    SendMailComponent
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
