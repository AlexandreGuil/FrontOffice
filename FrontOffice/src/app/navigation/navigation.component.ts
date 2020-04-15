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

  // lsitCategorie: Produit[] = [];
  lsitProduit: Produit[] = [];

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    // this.findAllCategorie();
    this.findAllProduit();
  }

  // findAllCategorie() {
  //   this.clientService.findAllCategorie().subscribe((value: any[]) => 
  //   this.lsitCategorie = value
  //   );
  // }

  findAllProduit() {
    this.clientService.findAllProduit().subscribe((value: any[]) =>
    this.lsitProduit = value
    );
  }

}
