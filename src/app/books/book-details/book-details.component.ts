import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
@Input() book?: Book;
@Output() hideDetails = new EventEmitter<void>();
  
    closeDetails() {
      this.hideDetails.emit();
    }
}