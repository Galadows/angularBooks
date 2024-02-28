import { Component, OnInit} from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
    selector: 'app-list-books',
    templateUrl: './listBooks.component.html',

})
export class ListBooks implements OnInit{

    books? : Book[] = [];
    selectedBook : any = null;
    searchText = '';

    constructor(private bookService : BookService) {}

    ngOnInit() {
        this.books = this.bookService.getBooks();
    }

    selectBook(book : Book, event : Event) {
        this.unselectBook()
        this.selectedBook = book;
        document.getElementById(book.id.toString())?.classList.add('table-info');
        
    }
    unselectBook() {
        if (this.selectedBook === null) {
            return;
        }
        document.getElementById(this.selectedBook.id.toString())?.classList.remove('table-info');
        this.selectedBook = null;
    }

    handleSearch(searchText: string) {
        this.searchText = searchText;
    }

    filteredBooks(){
        return this.books?.filter(book => book.titre.toLowerCase().includes(this.searchText.toLowerCase()));
    }
}