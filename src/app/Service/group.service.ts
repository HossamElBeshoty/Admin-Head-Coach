import { Injectable } from '@angular/core';
import {IGroup} from '../Models/i-group';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  group = {} as IGroup;
  constructor() { }
}
