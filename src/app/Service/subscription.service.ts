import { Injectable } from '@angular/core';
import {ISubscription} from '../Models/i-subscription';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  subscription = {} as ISubscription;
  constructor() { }
}
