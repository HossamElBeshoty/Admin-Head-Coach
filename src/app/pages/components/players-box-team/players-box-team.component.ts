import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPlayer} from '../../../Models/i-player';
import {MatchService} from '../../../Service/match.service';
import {FormationService} from '../../../Service/formation.service';
import {IFormation} from '../../../Models/i-formation';

@Component({
  selector: 'ngx-players-box-team',
  templateUrl: './players-box-team.component.html',
  styleUrls: ['./players-box-team.component.scss'],
})
export class PlayersBoxTeamComponent implements OnInit {

  displayChangePlayer = false;
  @Input() teamName: string;
  @Input() isTeamA: boolean;
  @Input() matchId: string;
  @Input() youtubePlayer: string;
  @Input() teamId: string;
  @Input() teamData: IPlayer[];
  @Output() teamPlayer: EventEmitter<any> = new EventEmitter();
  changePlayerData: IPlayer[];
  selectedIndex;
  toggle = true;
  status = 'Enable';
  willChangePlayer;
  inMatchPlayer: IPlayer[] = [];

  constructor(public matchService: MatchService, public formationService: FormationService) {
  }

  ngOnInit() {
  }

  changePlayer(id) {
    this.willChangePlayer = id;
    this.displayChangePlayer = true;
    this.matchService.getPlayersNotInMatch(this.teamId, this.matchId).subscribe(res => {
      this.changePlayerData = res as IPlayer[];
    });
  }

  inMatch(player: IPlayer) {
    const playerIndex = this.teamData.findIndex(c => c.id === player.id);
    this.teamData.splice(playerIndex, 1);
    this.inMatchPlayer.push(player);
  }

  outMatch(player: IPlayer) {
    const playerIndex = this.teamData.findIndex(c => c.id === player.id);
    this.inMatchPlayer.splice(playerIndex, 1);
    this.teamData.push(player);
  }

  changePlayerOnMatch(data: IPlayer) {
    const obj: IFormation = {
      changedPlayerId: this.willChangePlayer,
      matchId: this.matchId,
      playerId: data.id,
      status: 2,
      teamId: this.teamId,
      time: '00:00:00',
    };
    this.formationService.changeThePlayer(obj).subscribe(res => {
    }, error => {
    }, () => {
      this.displayChangePlayer = false;
      const index = this.teamData.findIndex(c => c.id === this.willChangePlayer);
      this.teamData.splice(index, 1, data);
    });
  }

  onPlayerClick(playerData: IPlayer) {
    this.selectedIndex = playerData.id;
    this.teamPlayer.emit(playerData);
  }
}
