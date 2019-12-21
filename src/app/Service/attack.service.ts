import {Injectable} from '@angular/core';
import {IAttackAnalysis} from '../Models/i-attack-analysis';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AttackService {
  attack = {} as IAttackAnalysis;

  constructor(private dataService: DataService) {
  }

  postAttack() {
    return this.dataService.add('api/Attack', this.attack);
  }
}
