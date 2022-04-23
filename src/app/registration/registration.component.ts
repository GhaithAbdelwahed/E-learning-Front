import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  utilisateur = new Utilisateur();
  msg='';
  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.utilisateur).subscribe(
     data =>{
      console.log("mrigl");
      this._router.navigate(['/login']);
    },
     error =>{
    console.log("mch mrigl");
    this.msg="User Already exist !" }
    //this._service.loginUserFromRemote(this.utilisateur).subscribe(error =>console.log("mch mrigl"));
    )}
    gotologin(){
      this._router.navigate(['/login'])
    }

}
