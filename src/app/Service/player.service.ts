import {Injectable} from '@angular/core';
import {IPlayer} from '../Models/i-player';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  player = {nationalityId: '7c82ef1a-641b-ea11-b448-309c231f8290'} as IPlayer;

  constructor(private dataService: DataService) {
  }

  postPlayer() {
    return this.dataService.add('api/Player', this.player);
  }

  getPlayers(id) {
    return this.dataService.get('api/Player/getByTeamId/' + id);
  }

  getFormulationPlayers(teamId: string, matchId: string) {
    return this.dataService.get('api/Player/getByMatch/' + teamId + '/' + matchId);
  }

  putPlayer() {
    return this.dataService.edit('api/Player', this.player);
  }

  deletePlayer(id) {
    return this.dataService.delete('api/Player/', id);
  }

  getAllNationality() {
    return this.dataService.get('api/Nationality');
  }

  getPlayerById(playerId) {
    return this.dataService.get('api/Player/' + playerId);
  }
}
