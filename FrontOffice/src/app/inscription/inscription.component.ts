import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  form: FormGroup ;
  clients: any []=[]
  index: any;
  client: any;
  id: any;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup ({
      name : new FormControl (null, Validators.required),
      nomcompte : new FormControl (null, Validators.required),
      motdepasse : new FormControl (null, Validators.required),
      adresse : new FormControl (null, Validators.required),
      telephone : new FormControl (null, Validators.required)
     });
  
  }
  addClient(){
    this.clients.push(this.form.value);
    console.log (this.clients);
  
  }
}
