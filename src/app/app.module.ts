import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { MenuComponent } from './menu/menu.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { YourBooksComponent } from './your-books/your-books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MenuComponent,
    AllBooksComponent,
    NavComponent,
    ContentComponent,
    YourBooksComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
