import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-comparison-page',
  templateUrl: './comparison-page.component.html',
  styleUrls: ['./comparison-page.component.scss'],
  animations: [
    trigger('animation', [
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition('void => *', [
        style({ transform: 'translateX(50%)', opacity: 0 }),
        animate('300ms ease-out'),
      ]),
      transition('* => void', [
        animate(('250ms ease-in'), style({
          height: 0,
          opacity: 0,
          transform: 'translateX(50%)',
        })),
      ]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ComparisonPageComponent implements OnInit {
  columnsPlayer: number[];
  columnsTeam: number[];
  displayPlayer: boolean = false;
  displayTeam: boolean = false;
  constructor() { }

  ngOnInit() {
    this.columnsPlayer = [];
    this.columnsTeam = [];
  }
  showPlayerDialog() {
    this.displayPlayer = true;
  }
  showTeamDialog() {
    this.displayTeam = true;
  }

  addColumnPlayer() {
    this.columnsPlayer.push(this.columnsPlayer.length);
  }
  addColumnTeam() {
    this.columnsTeam.push(this.columnsTeam.length);
  }
  removeColumnPlayer() {
    this.columnsPlayer.splice(-1, 1);
  }
  removeColumnTeam() {
    this.columnsTeam.splice(-1, 1);
  }
}
