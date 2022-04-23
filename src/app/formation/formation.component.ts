import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../formateur.service';
import { Formation } from '../formation';
import { FormationServiceService } from '../formation-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formation: Formation[]=[];
  constructor(private formationService: FormationServiceService, private route:Router) { }

  ngOnInit(): void {
    this.formationService.getFormations().subscribe(
      data=> this.formation = data);   
  }

  private getFormation(){
    this.formationService.getFormations().subscribe(data => {
      this.formation = data;
    });
  }

  updateFormation(id: number){
    this.route.navigate(['update-formation', id]);
  }
  
  deleteFormation(id: number){
    this.formationService.deleteFormation(id).subscribe( data => {
      console.log(data);
      this.getFormation();
    })
  }


}
