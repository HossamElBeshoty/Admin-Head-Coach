import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss'],
})
export class PersonalPageComponent implements OnInit {
  val1: number = 5;
  matches = [
    {date: '12/4/2019', teamA: 'Ahly', teamB: 'Zamalik'},
  ];
  indexAnalysis: number = -1;

  constructor() {
  }

  ngOnInit() {
  }

  openNext() {
    this.indexAnalysis = (this.indexAnalysis === 3) ? 0 : this.indexAnalysis + 1;
  }

  openPrev() {
    this.indexAnalysis = (this.indexAnalysis <= 0) ? 3 : this.indexAnalysis - 1;
  }
}
