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
  val1: number = 5;
  matches = [
    {date: '12/4/2019', teamA: 'Ahly', teamB: 'Zamalik'},
  ];
  indexAnalysis: number = -1;
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

  openNext() {
    this.indexAnalysis = (this.indexAnalysis === 3) ? 0 : this.indexAnalysis + 1;
  }

  openPrev() {
    this.indexAnalysis = (this.indexAnalysis <= 0) ? 3 : this.indexAnalysis - 1;
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
}
