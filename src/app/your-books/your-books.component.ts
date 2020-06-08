import { Component, OnInit } from '@angular/core';
import { IdbService } from '../services/idb.service';
import { Student } from '../model/student';
import { BorrowedBooks } from '../model/borrowed-books';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-your-books',
  templateUrl: './your-books.component.html',
  styleUrls: ['./your-books.component.css']
})
export class YourBooksComponent implements OnInit {

  student: Student;
  yourBooks: BorrowedBooks;
  currentStudentTest: number = 3; // Rosangela...
  isBookCancel: boolean = false;

  titleReview: string;
  textReview: string;

  constructor(
    private idb: IdbService,
    private router: Router) { }

  ngOnInit(): void {
    this.idb.get(this.idb.STUDENTS, this.currentStudentTest)
      .then(data => {
        this.student = data as Student;
      }).catch(err => {
        console.log("None Student was found: "+ err);
    });

    this.idb.getAllBooksByStudent(this.idb.BORROWED_BOOKS, this.currentStudentTest)
      .then(data => {
        this.yourBooks = data as BorrowedBooks;
      }).catch(err => {
        console.log("None Books was found: "+ err);
    });
  }

  cancelBook(book) {
    this.idb.delete(this.idb.BORROWED_BOOKS, Number(book))
      .then(data => {
        this.isBookCancel = true;
        this.ngOnInit();
      })
      .catch(err => {
        console.log("The book could be not cancel "+ err);
    });
  }

  addReview() {
  }

}
