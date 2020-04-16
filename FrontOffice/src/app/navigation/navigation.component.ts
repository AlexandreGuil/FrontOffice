import { Categorie } from './../../model/categorie';
import { Produit } from './../../model/produit';
import { Router } from '@angular/router';
import { ClientService } from 'src/service/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

 
  lsitProduit: Produit[] = [];
  panierproduits: any[]=[];
   listProduitTest= [    // LISTE FICTIVE D OBJETS POUR TESTER LES FONCTIONNALITES. A DESACTIVER POUR LE RENDU FINAL
    {
      idProduit:1,
      photo:"photo",
      nomProduit: "Rasoir",
      categorie_id:1,
      description:"Ce petit outil vous dressera au poil",
      
    },
    {
      idProduit:2,
      photo:"ouistiti",
      nomProduit: "Belvedere",
      categorie_id:2,
      description:"Personne ne sait ce que c'est",
      
    },
    {
      idProduit:3,
      photo:"cheese",
      nomProduit: "Ordinateur",
      categorie_id:3,
      description:"Puissante machine",
     
    }

  ]; 

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {

    console.log(this.clientService.navigMode);

    if(this.clientService.navigMode)
      this.findAllProduit();
    else
      this.lsitProduit = this.clientService.produit;
    console.log(this.clientService.produit);
  }

  findAllProduit() {
    this.clientService.findAllProduit().subscribe((value: Produit[]) =>
    this.lsitProduit = value
    );
  }

    ajouterPanier(i){
      this.panierproduits.push(this.listProduitTest[i]); // ICI, remplacer listProduitTest par lsitProduit


    }
    supprPanier(i){
      delete this.panierproduits[i];
     
    }

    payer(){
      delete this.panierproduits;
      alert("Transaction acceptée");
      this.router.navigate(['home']);
    }
}
