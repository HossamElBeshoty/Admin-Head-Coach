import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../../Service/player.service';
import {ActivatedRoute} from '@angular/router';
import {IPlayer} from '../../Models/i-player';
import {environment} from '../../../environments/environment';
import {PlayerPositions} from '../../Models/player-positions';

@Component({
  selector: 'ngx-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss'],
})
export class PersonalPageComponent implements OnInit {
  displayPlayerComparisonDialog = false;
  val1: number = 5;
  matches = [
    {
      against: 'Ahly',
      gS: '4/5(80%)',
      sixM: '',
      wing: '',
      nineM: '2',
      sevenM: '',
      fSKM: '139',
      fT: '',
      bT: '1',
      fTO: '1',
    },
  ];
  playerId;
  playerData: IPlayer;
  apiEndPoint = environment.apiEndPoint;
  positionArray = PlayerPositions.positionArray;

  constructor(public playerService: PlayerService, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.playerId = this.activatedRoute.snapshot.params.id;
    this.getPlayer();
  }

  getPlayer() {
    this.playerService.getPlayerById(this.playerId).subscribe(res => {
      this.playerData = res as IPlayer;
      const pos = this.positionArray.find(x => x.id === this.playerData.postions);
      if (pos) {
        this.playerData.positionName = pos.position;
      }
    });
  }

  showPlayerComparisonDialog() {
    this.displayPlayerComparisonDialog = true;
  }
}
