import { Component, OnInit } from '@angular/core';
//import { ClientService } from 'src/service/client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})

export class AuthentificationComponent implements OnInit {
  form: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup ({
      nomUtilisateur : new FormControl (null, Validators.required),
      motDePasse : new FormControl (null, Validators.required),
    });
  } 
       
  forgetPassword () { // Message pour les personnes tappant sur Mot de passe oublié
    alert("Tant pis pour toi!!!!");
  }   

  
  verifClient (){
    
  }
  
}







  
