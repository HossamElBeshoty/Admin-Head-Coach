import {Injectable} from '@angular/core';
import {ITeam} from '../Models/i-team';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  team = {} as ITeam;

  constructor(private dataService: DataService) {
  }

  getAllTeams(clubId) {
    return this.dataService.get('api/Team/getByClubId/' + clubId);
  }

  postTeam() {
    return this.dataService.add('api/Team', this.team);
  }

  updateTeam() {
    return this.dataService.edit('api/Team', this.team);
  }

  deleteTeam(id) {
    return this.dataService.delete('api/Team/', id);
  }
}
