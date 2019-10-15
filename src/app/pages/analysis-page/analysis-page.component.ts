import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/components/common/menuitem';

@Component({
  selector: 'ngx-analysis-page',
  templateUrl: './analysis-page.component.html',
  styleUrls: ['./analysis-page.component.scss'],
})
export class AnalysisPageComponent implements OnInit {
  items: MenuItem[];
  displayNewAnalysis = false;
  cols: any[];
  matchs = [
    {id: 1, date: '12/4/2018', teamA: 'Al Ahly SC', teamB: 'Zamalek SC'},
    {id: 2, date: '19/4/2018', teamA: 'FC Barcelona', teamB: 'Liverpool F.C.'},
  ];

  constructor() {
  }

  ngOnInit() {

    this.cols = [
      {field: 'date', header: 'Match Date'},
      {field: 'teamA', header: 'Team A'},
      {field: 'teamB', header: 'Team B'},
    ];
  }

  update() {
    // tslint:disable-next-line:no-console
    console.log('Update Works');
  }

  showNewAnalysisDialog() {
    this.displayNewAnalysis = true;
  }
}
