import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  testLogin: boolean;

  /*let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)*/
  constructor(private registrationService: RegistrationService, private route:Router) { }


  ngOnInit(): void {
  }

  checkAdminLogin(){
    let user = sessionStorage.getItem('username')
    if (!(user== null)) {
     this.route.navigate(['apprenant']);
    }
    else this.route.navigate(['login'])
       
  }

  checkTrainerLogin(){
    let user = sessionStorage.getItem('username')
    if (!(user== null)) {
     this.route.navigate(['courses-list']);
    }
    else this.route.navigate(['trainers-login'])
       
  }

  isLoggedIn(){
    let user = sessionStorage.getItem('username')
    if (!(user== null)) {console.log(true)
            return true;}
    else return false;     
  }

  isAdminIn(){
    let user = sessionStorage.getItem('username')
    if ((user== 'ghaith@live.fr')) {console.log(true)
            return true;}
    else return false;     
  }

  

}
