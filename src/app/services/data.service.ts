import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Array<Book>> {
    return this.http.get("./assets/books.json") as Observable<Array<Book>>;
  }

  getStudents(): Observable<Array<Student>> {
    return this.http.get("./assets/students.json") as Observable<Array<Student>>;
  }

}
