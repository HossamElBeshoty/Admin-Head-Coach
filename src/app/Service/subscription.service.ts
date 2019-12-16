import {Injectable} from '@angular/core';
import {ISubscription} from '../Models/i-subscription';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  subscription = {} as ISubscription;

  constructor(public dataService: DataService) {
  }

  getAllSubscriptions() {
    return this.dataService.get('api/Subscription');
  }
}
