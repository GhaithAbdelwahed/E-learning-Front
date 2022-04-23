import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../formateur';
import { FormateurService } from '../formateur.service';

@Component({
  selector: 'app-create-formateur',
  templateUrl: './create-formateur.component.html',
  styleUrls: ['./create-formateur.component.css']
})
export class CreateFormateurComponent implements OnInit {

  formateur: Formateur = new Formateur();
  constructor(private formateurService: FormateurService, private router: Router) { }

  ngOnInit(): void {
  }

  saveFormateur(){
    this.formateurService.createFormateur(this.formateur).subscribe(
     data =>{
      console.log(data);
      this.gotoFormateurList();
    },
    error => console.log(error));
  }

  gotoFormateurList(){
    this.router.navigate(['/admin']);
  }
  
  onSubmit(){
    console.log(this.formateur);
    this.saveFormateur();
  }
}

