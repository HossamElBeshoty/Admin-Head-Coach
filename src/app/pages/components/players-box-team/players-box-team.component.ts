import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {IPlayer} from '../../../Models/i-player';

@Component({
  selector: 'ngx-players-box-team',
  templateUrl: './players-box-team.component.html',
  styleUrls: ['./players-box-team.component.scss'],
})
export class PlayersBoxTeamComponent implements OnInit {
  player: MenuItem[];
  displayChangePlayer = false;
  @Input() teamName: string;
  @Input() teamData: IPlayer[];

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
