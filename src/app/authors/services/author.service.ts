import { Injectable } from '@angular/core';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors: Author[] = [
    new Author(1, 'Antoine', 'de Saint-Exupéry'),
    new Author(2, 'Stendhal', ''),
    new Author(3, 'Victor', 'Hugo'),
    new Author(4, 'Alain-Fournier', ''),
    new Author(5, 'Alexandre', 'Dumas')
  ]
  
    constructor() { }
  
    getAuthors() {
      return [...this.authors];
    }
}
