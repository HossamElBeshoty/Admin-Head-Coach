import {Injectable} from '@angular/core';
import {IUser} from '../Models/i-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = {} as IUser;

  constructor() {
  }
}
