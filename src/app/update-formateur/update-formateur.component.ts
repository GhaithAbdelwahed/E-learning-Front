import { Component, OnInit } from '@angular/core';
import { Formateur } from '../formateur';
import { FormateurService } from '../formateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';
@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.css']
})
export class UpdateFormateurComponent implements OnInit {

  id: number;
  formateur: Formateur = new Utilisateur();
  constructor(private formateurservice: FormateurService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.formateurservice.getFormateurById(this.id).subscribe(data => {
      this.formateur = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.formateurservice.updateFormateur(this.id, this.formateur).subscribe( data =>{
      this.goToFormateurList();
    }
    , error => console.log(error));
  }

  goToFormateurList(){
    this.router.navigate(['/admin']);
  }

}
