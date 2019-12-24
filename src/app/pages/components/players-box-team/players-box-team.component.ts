import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPlayer} from '../../../Models/i-player';

@Component({
  selector: 'ngx-players-box-team',
  templateUrl: './players-box-team.component.html',
  styleUrls: ['./players-box-team.component.scss'],
})
export class PlayersBoxTeamComponent implements OnInit {

  displayChangePlayer = false;
  @Input() teamName: string;
  @Input() teamData: IPlayer[];
  @Output() teamPlayer: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  changePlayer() {
    this.displayChangePlayer = true;
  }

  onPlayerClick(playerData) {
    this.teamPlayer.emit(playerData);
  }
}
