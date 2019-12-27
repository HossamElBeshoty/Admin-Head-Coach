import {Injectable} from '@angular/core';
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

  deleteAttack(id) {
    return this.dataService.delete('api/Attack', id);
  }
}
