import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { ListBooks } from './ListBooks/ListBooks.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { SearchBookComponent } from './search-book/search-book.component';


@NgModule({
  declarations: [
    ListBooks,
    SearchBookComponent,
    BookDetailsComponent,
    EditBookComponent,
    AddBookComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
