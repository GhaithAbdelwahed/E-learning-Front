import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Formateur } from '../formateur';

@Component({
  selector: 'app-trainers-login',
  templateUrl: './trainers-login.component.html',
  styleUrls: ['./trainers-login.component.css']
})
export class TrainersLoginComponent implements OnInit {
  formateur = new Formateur();
  msg='';
  isLogedin:boolean = false;
 constructor(private _service : RegistrationService, private _route : Router){}

 ngOnInit(){
 }
 loginTrainer(){
   this._service.loginTrainerFromRemote(this.formateur).subscribe(
    data =>{
     console.log("mrigl");
     sessionStorage.setItem('username', this.formateur.email)
     this.isLogedin = true; 
   //  this._service.setBool(this.isLogedin); 

     console.log(this.isLogedin);  

     this._route.navigate(['/courses-list']);  
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
 
   

   
}