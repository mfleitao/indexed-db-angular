import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IdbService } from '../services/idb.service';
import { Router } from '@angular/router';
import { Book } from '../model/book';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  
  books: Array<Book>;
  isBooksListOk: boolean = true;

  constructor(private idb: IdbService, private router: Router) { }

  routeBook(_id: string) {
    this.router.navigate(['book-info/',_id]);
  }

  ngOnInit(): void {
    this.idb.getAll(this.idb.BOOKS).then(response => {
      this.books = response as Array<Book>;
    }).catch(err => {
      console.log("No books returned "+ err);
      this.isBooksListOk = false;
    });
  }

}
