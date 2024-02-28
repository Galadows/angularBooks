import { Component } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Author } from '../model/author';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent {
  authors: Author[] = [];

  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.authors = this.authorService.getAuthors();
  }
}
