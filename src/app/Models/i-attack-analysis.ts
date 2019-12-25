import {IPostAnalyze} from './i-video-analysis';

export interface IAttackAnalysis {
  id: string;
  analyzes: IPostAnalyze[];
  timeFrom: string;
  videoId: string;
  timeTo: string;
  duration: number;
}
