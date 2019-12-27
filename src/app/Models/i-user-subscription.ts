import {ISubscription} from './i-subscription';

export interface IUserSubscription {
  id?: string;
  userId: string;
  subscriptionsId: number;
  subscription: ISubscription;
  subscriptionsDate: Date;
  matchesCount: number;
}
