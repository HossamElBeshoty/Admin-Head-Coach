import {Injectable} from '@angular/core';
import {IAttackAnalysis} from '../Models/i-attack-analysis';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AttackService {

  constructor(private dataService: DataService) {
  }

  postAttack(attackData) {
    return this.dataService.add('api/Attack', attackData);
  }
}
