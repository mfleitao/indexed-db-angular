import { Student } from './student';
import { Book } from './book';

export class Review {
    _id: number;
    title: string;
    student: Student;
    book: Book;
    date: Date;
    longText: string;
}