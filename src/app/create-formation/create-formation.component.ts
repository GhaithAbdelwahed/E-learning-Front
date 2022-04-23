import { Component, OnInit } from '@angular/core';
import { Formateur } from '../formateur';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../formation';
import { FormationServiceService } from '../formation-service.service';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.css']
})
export class CreateFormationComponent implements OnInit {
 
  formateur: Formateur[] =[];
  formation: Formation = new Formation();
  constructor(private formationService: FormationServiceService,private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formationService.getFormateur().subscribe(
      data => this.formateur = data)
  }

  createFormation(){
    this.formationService.createFormation(this.formation).subscribe(
       data => console.log("mrigl"))
       this.gotoFormationList();
  }

  gotoFormationList(){
    this.router.navigate(['/formation']);
  }
  
  onSubmit(){
    console.log(this.formateur);
    this.createFormation();
  }

}
