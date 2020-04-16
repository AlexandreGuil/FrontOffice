import { InscriptionService } from 'src/service/inscription.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  form: FormGroup ;
user : any;
  

  constructor(private InscriptionService: InscriptionService) { }

  ngOnInit(): void {
    this.form = new FormGroup ({
      // id: new FormControl (null, Validators.required),
      // actif : new FormControl(null, Validators.required),
      motDePasse : new FormControl (null, Validators.required),
      nomUtilisateur : new FormControl (null, Validators.required)
     });
  
  }

  addUser(){
    this.InscriptionService.add(this.form.value).subscribe(response => {
      this.InscriptionService.users.push(response.body);
       console.log(this.InscriptionService.users);
      })
 
  }
  
  
}
