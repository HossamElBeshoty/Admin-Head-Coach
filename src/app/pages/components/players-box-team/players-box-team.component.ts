import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'ngx-players-box-team',
  templateUrl: './players-box-team.component.html',
  styleUrls: ['./players-box-team.component.scss'],
})
export class PlayersBoxTeamComponent implements OnInit {
  player: MenuItem[];
  displayChangePlayer = false;

  constructor() {
  }

  ngOnInit() {
    this.player = [
      {
        label: 'Change Player', icon: 'pi pi-refresh', command: () => {
          this.changePlayer();
        },
      },
    ];
  }

  changePlayer() {
    this.displayChangePlayer = true;
  }
}
