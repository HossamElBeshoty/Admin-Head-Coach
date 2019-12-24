import {IAction} from './i-action';

export interface ICategory {
  id?: string;
  nameAr: string;
  nameEn: string;
  groupId: string;
  isDetected: boolean;
  type: number;
  actions: IAction[];
}
