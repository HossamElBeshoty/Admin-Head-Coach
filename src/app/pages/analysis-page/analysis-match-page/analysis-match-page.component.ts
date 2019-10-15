import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'ngx-analysis-match-page',
  templateUrl: './analysis-match-page.component.html',
  styleUrls: ['./analysis-match-page.component.scss'],
})
export class AnalysisMatchPageComponent implements OnInit {
  cars = [{
    name: 'FastBreak (15)',
    position: '33 min 12 Sec',
    duration: '6 Sec',
    standerdSet: '',
    possession: 'Team A',
    gameSet: 'Shot',
    crossDiscription: 'Back To Back',
    shotOutCome: 'Goal',
    goalPosition: 'Right Down',
    player: ' Hazem Hammed',
    penalty: '',
    score: '1:0',
  }];
  cols: any[];

  constructor() {
  }

  ngOnInit() {
    this.cols = [
      {field: 'name', header: 'Name', width: '20%'},
      {field: 'position', header: 'Position', width: '20%'},
      {field: 'duration', header: 'Duration', width: '20%'},
      {field: 'standerdSet', header: 'Stand. Set', width: '20%'},
      {field: 'possession', header: 'Poss.', width: '20%'},
      {field: 'gameSet', header: 'Game Set', width: '20%'},
      {field: 'crossDiscription', header: 'Cross Dis.', width: '20%'},
      {field: 'shotOutCome', header: 'Shot Out.', width: '20%'},
      {field: 'goalPosition', header: 'Goal Pos.', width: '20%'},
      {field: 'player', header: 'Player', width: '20%'},
      {field: 'penalty', header: 'Penalty', width: '20%'},
      {field: 'score', header: 'Score', width: '15%'},
    ];
  }


}
