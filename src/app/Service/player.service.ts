import {Injectable} from '@angular/core';
import {IPlayer} from '../Models/i-player';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  player = {} as IPlayer;

  constructor(private dataService: DataService) {
  }

  postPlayer() {
    return this.dataService.add('api/Player', this.player);
  }

  getPlayers(id) {
    return this.dataService.get('api/Player/getByTeamId/' + id);
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
}
