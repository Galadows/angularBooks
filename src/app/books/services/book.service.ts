import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   books: Book[] = [
            new Book(
                1,
                'Le Petit Prince',
                'Antoine de Saint-Exupéry',
                '1943',
                10,
                'Un conte poétique sur un jeune prince qui explore l\'univers.',
                'https://m.media-amazon.com/images/I/61NGp-UxolL._AC_UF1000,1000_QL80_.jpg'
            ),
            new Book(
                2,
                'Le Rouge et le Noir',
                'Stendhal',
                '1830',
                20,
                'Un roman psychologique sur l\'amour, l\'ambition et la classe sociale.',
                'https://m.media-amazon.com/images/I/71eGT3UqCZL._AC_UF1000,1000_QL80_.jpg'
            ),
            new Book(
                3,
                'Les Misérables',
                'Victor Hugo',
                '1862',
                30,
                'Un roman historique épique se déroulant au début du XIXe siècle en France.',
                'https://m.media-amazon.com/images/I/81e1NPAQJmL._AC_UF1000,1000_QL80_.jpg'
            ),
            new Book(
                4,
                'Le Grand Meaulnes',
                'Alain-Fournier',
                '1913',
                40,
                'Un roman initiatique sur l\'amour perdu et la recherche du bonheur.',
                'https://m.media-amazon.com/images/I/61Zq9s-0MlL._AC_UF1000,1000_QL80_.jpg'
            ),
            new Book(
                5,
                'Les Trois Mousquetaires',
                'Alexandre Dumas',
                '1844',
                50,
                'Une aventure palpitante des trois mousquetaires.',
                'https://images.epagine.fr/843/9782035850843_1_75.jpg'
            )
        ];

  constructor() { }

  getBooks() {
    return [...this.books];
  }
}
