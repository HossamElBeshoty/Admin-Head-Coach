import {Injectable} from '@angular/core';
import {IUserSubscription} from '../Models/i-user-subscription';

@Injectable({
  providedIn: 'root',
})
export class UserSubscriptionService {
  userSubscription = {} as IUserSubscription;

  constructor() {
  }
}
