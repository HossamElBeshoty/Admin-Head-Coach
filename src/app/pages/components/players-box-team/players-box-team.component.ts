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
  @Input() isTeamA: boolean;
  @Input() teamData: IPlayer[];
  @Output() teamPlayer: EventEmitter<any> = new EventEmitter();

  selectedIndex;
  toggle = true;
  status = 'Enable';
  constructor() {
  }

  ngOnInit() {
  }

  changePlayer() {
    this.displayChangePlayer = true;
  }

  onPlayerClick(playerData: IPlayer) {
    this.selectedIndex = playerData.id;
    this.teamPlayer.emit(playerData);
  }
}
