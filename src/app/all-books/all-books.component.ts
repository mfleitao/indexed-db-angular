import { Component, OnInit } from '@angular/core';
import { IdbService } from '../services/idb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  
  books: any;

  constructor(private idb: IdbService, private router: Router) { }

  routeBook(id: string) {
    this.router.navigate(['book-info/','id']);
  }

  ngOnInit(): void {
    this.idb.getAll('books-store').then(response => {
      this.books = response;
    });
  }

}
