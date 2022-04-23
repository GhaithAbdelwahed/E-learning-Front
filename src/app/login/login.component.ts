import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { RegistrationService } from '../registration.service';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   utilisateur = new Utilisateur();
   msg='';
   isLogedin:boolean = false;
  constructor(private _service : RegistrationService, private _route : Router){}

  ngOnInit(){
  }
  loginUser(){
    this._service.loginUserFromRemote(this.utilisateur).subscribe(
     data =>{
      console.log("mrigl");
      sessionStorage.setItem('username', this.utilisateur.email)
      this.isLogedin = true; 
    //  this._service.setBool(this.isLogedin); 

      console.log(this.isLogedin);  

      this._route.navigate(['/cours']);  
     // this.sharedservice.sendlogin();
      
     
    },
     error =>{
    console.log("mch mrigl");
    this.isLogedin = false;
    //this._service.setBool(this.isLogedin); 
    console.log(this.isLogedin); 
    this.msg="Bad credentials, please enter valid email or password"; }
    //this._service.loginUserFromRemote(this.utilisateur).subscribe(error =>console.log("mch mrigl"));
    )
    return this.isLogedin}
    gotoregistration(){
      this._route.navigate(['/registration'])
    }

    checkAdminLogin() {
      if (this._service.loginAdmin(this.utilisateur, this._route)
      ) {
        this._route.navigate(['\admin'])
      }
        /*this.invalidLogin = false
      } else
        this.invalidLogin = true*/
    }

   
  
    

    
}
