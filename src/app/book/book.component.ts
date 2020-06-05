import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IdbService } from '../services/idb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  paramSub: any;
  bookSub: any;
  book: any;

  constructor(private service: DataService, private idb: IdbService, private route: ActivatedRoute) {}
  
  ngOnInit(): void {

    this.paramSub = this.route.params.subscribe((params) =>  {
      this.book = this.idb.get('books-store', params['id']);
    });

    // this.service.getBooks().subscribe(data => {
    //   data.forEach(b => {
    //     if (b.isbn != undefined && b.categories.length > 0) {
    //       this.idb.add('books-store', {
    //         isbn: b.isbn,
    //         title: b.title,
    //         pageCount: b.pageCount,
    //         thumbnailUrl: b.thumbnailUrl,
    //         shortDescription: b.shortDescription,
    //         longDescription: b.longDescription,
    //         publishedDate: b.publishedDate,
    //         status: b.status.toLowerCase(),
    //         authors: b.authors,
    //         categories: b.categories
    //       });
    //     }
    //   });
    // });
  }

}
