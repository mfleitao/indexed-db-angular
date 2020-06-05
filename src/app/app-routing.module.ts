import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { YourBooksComponent } from './your-books/your-books.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'your-books', component: YourBooksComponent },
  { path: 'list-all-books', component: AllBooksComponent },
  { path: 'book-info/:id', component: BookComponent },
  { path: '', redirectTo: '/your-books', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

