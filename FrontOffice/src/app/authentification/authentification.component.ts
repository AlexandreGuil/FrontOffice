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
  form: FormGroup ;
  clients: any []=[]
  index: any;
  client: any;
  id: any;


  constructor() { }

  ngOnInit(): void {
   this.form = new FormGroup ({
    nomcompte : new FormControl (null, Validators.required)
   });

   
        }
     
      
     
  forgetPassword () { // Message pour les personnes tappant sur Mot de passe oublié
    alert("Tant pis pour toi!!!!");
  }   
  
addClient(){
  this.clients.push(this.form.value);
  console.log (this.clients);

}


  
  }







  
