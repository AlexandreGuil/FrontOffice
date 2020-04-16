import { Produit } from './produit';
export class Categorie {
    idCategorie: number;
    nomCategorie: String;
    photo: String;
    description: String;
    produits: Produit[];
}
