import {Injectable} from '@angular/core';
import {IFormation} from '../Models/i-formation';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  formation = {} as IFormation;

  constructor() {
  }
}
