import {Injectable} from '@angular/core';
import {IClub} from '../Models/i-club';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  club = {} as IClub;

  constructor(private dataService: DataService) {
  }

  getAllClubs() {
    return this.dataService.get('api/Club');
  }

  postClub() {
    return this.dataService.add('api/Club', this.club);
  }

  updateClub() {
    return this.dataService.edit('api/Club', this.club);
  }

  deleteClub(id) {
    return this.dataService.delete('api/Club/', id);
  }
}
