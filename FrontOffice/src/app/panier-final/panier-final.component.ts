import { Router } from '@angular/router';
import { ClientService } from 'src/service/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier-final',
  templateUrl: './panier-final.component.html',
  styleUrls: ['./panier-final.component.css']
})
export class PanierFinalComponent implements OnInit {

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    
  }

 supprimer(){
    let choix = confirm("Êtes-vous sûr de vouloir supprimer?");
    if(choix){
        // Mettez ici la logique de suppression
    }
}

enregistrer(){
  let enregistr = confirm("Voulez-vous enregistrer votre panier?");
  if(enregistr){
      // Mettez ici la logique d'enregistrement
  }
}

payer(){
  alert("Merci de votre visite");
}

}
