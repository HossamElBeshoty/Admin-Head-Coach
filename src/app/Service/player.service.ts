import {Injectable} from '@angular/core';
import {IPlayer} from '../Models/i-player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  player = {} as IPlayer;

  constructor() {
  }
}
