import {IFormation} from './i-formation';
import {IMatchVideo} from './i-match-video';
import {ITeam} from './i-team';

export interface IMatch {
  id?: string;
  teamAId: string;
  teamA?: ITeam;
  teamBId: string;
  teamB?: ITeam;
  matchDate: Date;
  groupId: string;
  formations: IFormation[];
  matchVideos: IMatchVideo[];
}
