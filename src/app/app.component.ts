import { Component } from '@angular/core';
import { DataService } from '../app/services/data.service';
import { IdbService } from '../app/services/idb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: DataService, private idb: IdbService) {

    // this.service.getStudents().subscribe(data => {
    //   data.forEach(s => {
    //     this.idb.add('students-store', {
    //       firstName: s.firstName,
    //       lastName: s.lastName,
    //       email: s.email,
    //       password: s.password,
    //       program: s.program,
    //       campus: s.campus
    //     });
    //   });
    // });

    

  }

}
