import {Injectable} from '@angular/core';
import {IMatchVideo} from '../Models/i-match-video';

@Injectable({
  providedIn: 'root',
})
export class MatchVideoService {
  matchVideos = {} as IMatchVideo;

  constructor() {
  }
}
