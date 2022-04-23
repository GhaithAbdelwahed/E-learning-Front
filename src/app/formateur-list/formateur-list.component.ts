import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../formateur';
import { FormateurService } from '../formateur.service';

@Component({
  selector: 'app-formateur-list',
  templateUrl: './formateur-list.component.html',
  styleUrls: ['./formateur-list.component.css']
})
export class FormateurListComponent implements OnInit {

  formateurs: Formateur[];

  constructor(private formateurService: FormateurService, private route:Router) { }

  ngOnInit(): void {
    this.getFormateurs();
  }
  goToCreateFormateur(){
    this.route.navigate(['create-Formateur']);
  }
  
  private getFormateurs(){
    this.formateurService.getFormateursList().subscribe(data => {
      this.formateurs = data;
    });
  }

  /*formateurDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }*/

  updateFormateur(id: number){
    this.route.navigate(['update-formateur', id]);
  }

  deleteFormateur(id: number){
    this.formateurService.deleteFormateur(id).subscribe( data => {
      console.log(data);
      this.getFormateurs();
    })
  }

}
