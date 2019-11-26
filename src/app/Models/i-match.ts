import {IFormation} from './i-formation';
import {IMatchVideo} from './i-match-video';

export interface IMatch {
  id?: string;
  teamAId: string;
  teamBId: string;
  matchDate: Date;
  groupId: string;
  formations: IFormation[];
  matchVideos: IMatchVideo[];
}
