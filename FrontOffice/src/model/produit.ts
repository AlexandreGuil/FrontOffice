import { Categorie } from './categorie';

export class Produit {

    idProduit: number;
    nomProduit: String;
    description: String;
    prix: number;
    quantite: number;
    selectione: boolean;
    photo:  String;
    categorie: Categorie;

}
