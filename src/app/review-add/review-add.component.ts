import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../model/book';
import { Student } from '../model/student';
import { IdbService } from '../services/idb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})
export class ReviewAddComponent implements OnInit {

  @Input() bookId: any;
  @Input() studentId: any;
  @Input() modal: any;

  reviewBook: Book;
  reviewStudent: Student;
  isReviewAdded: boolean = false;

  constructor(
    private idb: IdbService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addReview(review) {
    this.idb.get(this.idb.STUDENTS, Number(this.studentId))
      .then(std => {
        this.reviewStudent = std as Student;

        this.idb.get(this.idb.BOOKS, Number(this.bookId))
        .then(book => {
          this.reviewBook = book as Book;
          
          this.idb.add(this.idb.REVIEWS, {
            title: review.title,
              student: this.reviewStudent,
              book: this.reviewBook,
              date: new Date(),
              longText: review.text
            })
            .then(data => {
              this.isReviewAdded = true;
            })
            .catch(err => {
              console.log("The review could not be stored "+ err);
            });

        });

    });
  }

}
