import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getBooks(): Observable<any> {
    return this.http.get("./assets/books.json");
  }

  public getStudents(): Observable<any> {
    return this.http.get("./assets/students.json");
  }


}
