import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Formateur } from './formateur';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) { }
  
  public loginUserFromRemote(utilisateur :Utilisateur):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",utilisateur)
  }

  public loginTrainerFromRemote(formateur :Formateur):Observable<any>{
    return this._http.post<any>("http://localhost:8080/loginFormateur",formateur)
  }



  loginAdmin(admin : Utilisateur, rout:Router) {
    if (admin.email === "ghaith@live.fr" && admin.mdp === "123") {
      sessionStorage.setItem('username', admin.email)
      return true;
    } else {
     
      return false;
    }
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }



  public registerUserFromRemote(utilisateur :Utilisateur):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registeruser",utilisateur)
  }


}
