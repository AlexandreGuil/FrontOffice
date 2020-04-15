import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {
    categorie: any[] = [];
    produit: any[] = [];
    editMode: Boolean = false;
    URL = 'http://localhost:8080/apiClient/';

    constructor(private httpClient: HttpClient){};


    findAllCategorie() {
        return this.httpClient.get<any[]>(this.URL + 'findAllCategorie').pipe(map(value => this.categorie = value));
    }

    findCategorieById(id) {
        return this.httpClient.get<any[]>(this.URL + 'findCategorieById/' + id);
    }

    findAllProduit() {
        return this.httpClient.get<any[]>(this.URL + 'findAllProduit').pipe(map(value => this.produit = value));
    }

    findProduitParMotCle(mot) {
        return this.httpClient.get<any[]>(this.URL + 'findProduitParMotCle/' + mot).pipe(map(value => this.produit = value));
    }

    findProduitParCategorie(id) {
        return this.httpClient.get<any[]>(this.URL + 'findProduitParCategorie/' + id).pipe(map(value => this.produit = value));
    }

    findProduitSelectionnes() {
        return this.httpClient.get<any[]>(this.URL + 'findProduitSelectionnes').pipe(map(value => this.produit = value));
    }

    findProduitById(id) {
        return this.httpClient.get<any>(this.URL + 'findByIdProduit/' + id);
    }
}