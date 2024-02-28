export class Book {
    id: number;
    titre: string;
    auteur: string;
    date_publication: string;
    prix: number;
    description: string;
    cover_url: string;
    constructor(id: number, titre: string, auteur: string, date_publication: string, prix: number, description: string, cover_url: string) {
        this.id = id;
        this.titre = titre;
        this.auteur = auteur;
        this.date_publication = date_publication;
        this.prix = prix;
        this.description = description;
        this.cover_url = cover_url;
    }
}
