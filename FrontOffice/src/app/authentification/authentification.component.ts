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
    this.form = new FormGroup({
     
      nomcompte : new FormControl (null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      
    })// fin FormGroup

   
        }
     
      
     
     
  

  addClientt(){
      this.clients.push(this.form.value);  //récup les valeur saisi par user au travers de l'objet form qui stock les éléème de formgroup
    console.log(this.clients);
    
    }

  
  }







  
