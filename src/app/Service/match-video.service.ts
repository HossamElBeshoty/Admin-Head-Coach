import {Injectable} from '@angular/core';
import {IMatchVideo} from '../Models/i-match-video';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class MatchVideoService {
  matchVideos = {} as IMatchVideo;

  constructor(private dataService: DataService) {
  }

  getMatchVideos(matchId: string) {
    return this.dataService.get('api/MatchVideo/getAllByMatchId/' + matchId);
  }
}
