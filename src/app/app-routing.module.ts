import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApprenantListComponent } from './apprenant-list/apprenant-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesComponent } from './courses/courses.component';
import { CreateFormateurComponent } from './create-formateur/create-formateur.component';
import { CreateFormationComponent } from './create-formation/create-formation.component';
import { FormateurListComponent } from './formateur-list/formateur-list.component';
import { FormationComponent } from './formation/formation.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { TeamComponent } from './team/team.component';
import { TrainersLoginComponent } from './trainers-login/trainers-login.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';

const routes: Routes = [
  {path: 'update-formateur/:id', component:UpdateFormateurComponent},
  {path: 'update-formation/:id', component:UpdateFormationComponent},
  {path: 'trainers-login', component:TrainersLoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'apprenant', component: ApprenantListComponent},
  {path: 'admin', component: FormateurListComponent},
  {path: 'create-Formateur', component:CreateFormateurComponent},
  {path: 'create-formation', component:CreateFormationComponent},
  {path: 'create-formation/:id', component:CreateFormationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout',component:LogoutComponent},
  {path:'cours',component: CoursesComponent},
  {path:'courses-list',component:CoursesListComponent},
  {path:'home',component: HomeComponent},
  {path:'team',component: TeamComponent},
  {path:'formation',component: FormationComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: '', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
