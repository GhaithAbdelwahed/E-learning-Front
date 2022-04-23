import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private _service: RegistrationService, private route: Router ) {
  }

  ngOnInit(): void {
  sessionStorage.removeItem('username')
   this.route.navigate(['/login']);
  }

}
