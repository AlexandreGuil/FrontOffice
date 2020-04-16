import { Produit } from './../../model/produit';
import { Router } from '@angular/router';
import { ClientService } from 'src/service/client.service';
import { Categorie } from './../../model/categorie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-barre',
  templateUrl: './nav-barre.component.html',
  styleUrls: ['./nav-barre.component.css']
})
export class NavBarreComponent implements OnInit {

  listCategorie: Categorie[] = [];
  listProduit: Produit[] = [];
  id: number;
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.findAllCategorie();
    console.log(this.listCategorie);

    this.findProduitParCategorie(1);
  }

  findAllCategorie() {
    this.clientService.findAllCategorie().subscribe((value: Categorie[]) => 
    this.listCategorie = value
    );
  }

  findProduitParCategorie(id) {
    this.clientService.findProduitParCategorie(id).subscribe((response: Produit[]) =>
      this.listProduit = response
    );
  }

}
