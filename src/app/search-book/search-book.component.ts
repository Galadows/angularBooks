import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
  @Output() search = new EventEmitter<string>();
  handleInput(searchText: string) {
    this.search.emit(searchText);
  }
}
