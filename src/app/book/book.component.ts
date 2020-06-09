import { Component, OnInit, OnDestroy } from '@angular/core';
import { IdbService } from '../services/idb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book';
import { BorrowedBooks } from '../model/borrowed-books';
import { Student } from '../model/student';
import { Review } from '../model/review';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {

  paramSub: any;
  book: Book;
  borrow: BorrowedBooks;
  brwStudent: Student;
  brwBook: Book;
  isBookBorrowed: boolean = false;
  currentStudentTest: number = 1; // Glacy Leitao...

  reviews: Array<Review>;

  constructor(
      private idb: IdbService, 
      private route: ActivatedRoute,
      private router: Router) {}
  
  ngOnInit() {
    this.paramSub = this.route.params.subscribe(params => {
      this.idb.get(this.idb.BOOKS, Number(params['_id']))
        .then(data => {
          this.book = data as Book;

          this.idb.getAllReviewsByBook(this.idb.REVIEWS, this.book._id)
            .then(reviews => {
              this.reviews = reviews as Array<Review>;
          }).catch(err =>  {
            console.log("None review was found "+ err);
          });
          
      }).catch(err => {
          console.log("None book was found "+ err);
      });
    });
  }

  borrowBook(bookId, studentId): void {
    this.idb.get(this.idb.BOOKS, Number(bookId)).then(data => {
      this.brwBook = data as Book;
      
      this.idb.get(this.idb.STUDENTS, Number(studentId)).then(data => { 
        this.brwStudent = data as Student; 
        
        this.idb.add(this.idb.BORROWED_BOOKS, {
          student: this.brwStudent,
          book: this.brwBook,
          borrowedDate: new Date(),
          returnDate: new Date()
        })
        .then(data => {
          this.isBookBorrowed = true;
          setTimeout(() => this.router.navigate(['/your-books']), 2000);
        })
        .catch(err => {
          console.log("None book was borrowed, error: "+ err);
        });

      });
    });
  }

  ngOnDestroy() {
    if (this.paramSub != undefined) this.paramSub.unsubscribe();
  }

}
