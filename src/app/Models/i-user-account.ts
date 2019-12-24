import {IUserSubscription} from './i-user-subscription';

export interface IUserAccount {
  id?: string;
  email: string;
  phoneNumber: string;
  lockoutEndDateUtc: Date;
  lockoutEnabled: boolean;
  userName: string;
  name: string;
  creationDate: Date;
  matchesCount: number;
  profilePath: string;
  userSubscriptions: IUserSubscription[];
}
