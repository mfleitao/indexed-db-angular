import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { YourBooksComponent } from './your-books/your-books.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewStudentComponent } from './new-student/new-student.component';

const routes: Routes = [
  { path: 'student-add', component: NewStudentComponent },
  { path: 'your-books', component: YourBooksComponent },
  { path: 'list-all-books', component: AllBooksComponent },
  { path: 'book-info/:_id', component: BookComponent },
  { path: '', redirectTo: '/list-all-books', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

