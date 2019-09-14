import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss'],
})
export class ReportsPageComponent implements OnInit {
  index: number = -1;
  constructor() { }

  ngOnInit() {
  }
  openNext() {
    this.index = (this.index === 3) ? 0 : this.index + 1;
}

openPrev() {
    this.index = (this.index <= 0) ? 3 : this.index - 1;
}
}
