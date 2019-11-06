import {Injectable} from '@angular/core';
import {IAction} from '../Models/i-action';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  action = {} as IAction;

  constructor() {
  }
}
