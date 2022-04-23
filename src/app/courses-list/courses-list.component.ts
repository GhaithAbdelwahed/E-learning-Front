import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from '../courses';
import { Formation } from '../formation';
import { FormationServiceService } from '../formation-service.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  formation: Formation[]=[];
  constructor(private formationService: FormationServiceService, private route:Router) { }

  ngOnInit(): void {
    this.formationService.getFormations().subscribe(
      data=> this.formation = data);   
  }
  
  checkname(){
    let string = sessionStorage.getItem('username')
    if(string == 'ghaith@live.fr'){return 'admin'}
    else if (!string== null){return string}
    else return string;

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
