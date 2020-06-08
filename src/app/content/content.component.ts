import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div class="container-fluid" style="margin-top:30px">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [``]
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
