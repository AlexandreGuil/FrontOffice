import { Produit } from './produit';
export class Categorie {
    categorie_id: number;
    designation: String;
    photo: String;
    description: String;
    produits: Produit[];
}
