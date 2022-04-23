import { Component, OnInit } from '@angular/core';
import { Apprenant } from '../apprenant';
import { ApprenantService } from '../apprenant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apprenant-list',
  templateUrl: './apprenant-list.component.html',
  styleUrls: ['./apprenant-list.component.css']
})
export class ApprenantListComponent implements OnInit {

  apprenant: Apprenant[];

  constructor(private apprenantService: ApprenantService, private route:Router) { }

  ngOnInit(): void {
    this.getApprenant();
  }
  
  private getApprenant(){
    this.apprenantService.getApprenantList().subscribe(data => {
      this.apprenant = data;
    });
  }

  /*formateurDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }*/

  updateApprenant(id: number){
    this.route.navigate(['update-formateur', id]);
  }

  deleteApprenant(id: number){
    this.apprenantService.deleteApprenant(id).subscribe( data => {
      console.log(data);
      this.getApprenant();
    })
  }

}
