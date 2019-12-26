import {Injectable} from '@angular/core';
import {IFormation} from '../Models/i-formation';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  formation = {} as IFormation;

  constructor(private dateService: DataService) {
  }

  changeThePlayer(formation) {
    return this.dateService.add('api/Formation', formation);
  }
}
