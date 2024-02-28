import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBooks } from './ListBooks/ListBooks.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  {path: '', component: ListBooks},
  {path: 'add', component: AddBookComponent},
  {path: 'edit/', component: EditBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
