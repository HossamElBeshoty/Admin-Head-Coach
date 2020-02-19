import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {IMatch} from '../Models/i-match';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  match = {} as IMatch;

  constructor(private dataService: DataService) {
  }

  postNewMatch() {
    return this.dataService.add('api/Match', this.match);
  }

  postNewMatchCount() {
    return this.dataService.add('api/Match/Count', this.match);
  }

  getAllMatches() {
    return this.dataService.get('api/Match/getAll/');
  }

  getMatchById(matchId) {
    return this.dataService.get('api/Match/' + matchId);
  }

  getPlayersNotInMatch(teamId: string, matchId: string) {
    return this.dataService.get(`api/Player/getPlayersNotInFormation/${teamId}/${matchId}`);
  }

  deleteMatch(matchId) {
    return this.dataService.delete('api/Match/', matchId);
  }
}
