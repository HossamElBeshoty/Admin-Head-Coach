import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPlayer} from '../../../Models/i-player';
import {MatchService} from '../../../Service/match.service';
import {FormationService} from '../../../Service/formation.service';

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
  @Input() teamId: string;
  @Input() teamData: IPlayer[];
  @Output() teamPlayer: EventEmitter<any> = new EventEmitter();
  changePlayerData: IPlayer[];
  selectedIndex;
  toggle = true;
  status = 'Enable';

  constructor(public matchService: MatchService, public formationService: FormationService) {
  }

  ngOnInit() {
  }

  changePlayer() {
    this.displayChangePlayer = true;
    this.matchService.getPlayersNotInMatch(this.teamId, this.matchId).subscribe(res => {
      this.changePlayerData = res as IPlayer[];
    });
  }

  changePlayerOnMatch() {
    this.formationService.changeThePlayer().subscribe(res => {
      // console.log(res);
    }, error => {
    }, () => {
      this.displayChangePlayer = false;
    });
  }

  onPlayerClick(playerData: IPlayer) {
    this.selectedIndex = playerData.id;
    this.teamPlayer.emit(playerData);
  }
}
