import {IVideoAnalysis} from './i-video-analysis';

export interface IAttackAnalysis {
  id: string;
  analyzes: IVideoAnalysis[];
  timeFrom: string;
  timeTo: string;
  duration: string;
}
