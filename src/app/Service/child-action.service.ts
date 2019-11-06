import { Injectable } from '@angular/core';
import {IChildAction} from '../Models/i-child-action';

@Injectable({
  providedIn: 'root',
})
export class ChildActionService {
  childAction = {} as IChildAction;
  constructor() { }
}
