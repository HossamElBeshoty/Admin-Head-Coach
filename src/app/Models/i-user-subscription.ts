import {ISubscription} from './i-subscription';

export interface IUserSubscription {
  id?: string;
  userId: string;
  subscription: ISubscription[];
  subscriptionsDate: Date;
  matchesCount: number;
}
