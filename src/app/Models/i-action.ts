import {IChildAction} from './i-child-action';

export interface IAction {
  id?: string;
  nameAr: string;
  nameEn: string;
  categoryId: string;
  type: string;
  childActions: IChildAction[];
}
