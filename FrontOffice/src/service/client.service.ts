import { Categorie } from './../model/categorie';
import { Produit } from './../model/produit';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {
    categorie: Categorie[] = [];
    produit: Produit[] = [];
    navigMode: Boolean = true;
    URL = 'http://localhost:8080/apiClient/';

    constructor(private httpClient: HttpClient){/* console.log("construct client service"); */};


    findAllCategorie(): Observable<Categorie[]> {
        // console.log(this.URL + 'findAllCategorie');
        return this.httpClient.get<Categorie[]>(this.URL + 'findAllCategorie').pipe(map(value => this.categorie = value));
    }

    // findCategorieById(id): Observable<Produit[]> {
    //     return this.httpClient.get<Produit[]>(this.URL + 'findCategorieById/' + id);
    // }

    findAllProduit(): Observable<Produit[]> { 
        // console.log(this.URL + 'findAllProduit');
        return this.httpClient.get<Produit[]>(this.URL + 'findAllProduit').pipe(map(value => this.produit = value));
    }

    findProduitParMotCle(mot): Observable<Produit[]> {
        console.log(this.URL + 'findProduitParMotCle/' + mot)
        return this.httpClient.get<Produit[]>(this.URL + 'findProduitParMotCle/' + mot).pipe(map(value => this.produit = value));
    }

    findProduitParCategorie(id): Observable<Produit[]> {
        return this.httpClient.get<Produit[]>(this.URL + 'findProduitParCategorie/' + id).pipe(map(value => this.produit = value));
    }

    // findProduitSelectionnes(): Observable<Produit[]> {
    //     return this.httpClient.get<Produit[]>(this.URL + 'findProduitSelectionnes').pipe(map(value => this.produit = value));
    // }

    // findProduitById(id): Observable<Produit[]> {
    //     return this.httpClient.get<Produit[]>(this.URL + 'findByIdProduit/' + id);
    // }
}