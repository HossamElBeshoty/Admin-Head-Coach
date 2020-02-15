import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-analysis-page-count',
  templateUrl: './analysis-page-count.component.html',
  styleUrls: ['./analysis-page-count.component.scss'],
})
export class AnalysisPageCountComponent implements OnInit {
  countsData = [
    {
      actionA: 'Attack',
      countA: 4,
      descriptionA: 'Nice Attack',
      actionB: 'Defence',
      countB: 2,
      descriptionB: 'Bad Defence',
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
