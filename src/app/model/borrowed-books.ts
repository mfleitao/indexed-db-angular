import { Student } from './student';
import { Book } from './book';

export class BorrowedBooks {
    _id: number;
    student: Student;
    book: Book;
    borrowedDate: Date;
    returnDate: Date;
}
