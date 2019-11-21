import {Component, OnInit} from '@angular/core';
import {ClubService} from '../../Service/club.service';
import {TeamService} from '../../Service/team.service';
import {PlayerService} from '../../Service/player.service';
import {IClub} from '../../Models/i-club';
import {ITeam} from '../../Models/i-team';

@Component({
  selector: 'ngx-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss'],
})
export class TeamsPageComponent implements OnInit {
  displayClubDialog: boolean = false;
  displayDeleteClubDialog: boolean = false;
  displayTeamDialog: boolean = false;
  displayDeleteTeamDialog: boolean = false;
  displayPlayerDialog: boolean = false;
  allClubs: IClub[] = [];
  allTeams: ITeam[] = [];
  tabIndex = 0;
  clubDeleteId;
  teamDeleteId;

  constructor(public clubService: ClubService, public teamService: TeamService, public playerService: PlayerService) {
  }

  ngOnInit() {
    this.getAllClubs();
  }

  showClubDialog() {
    this.displayClubDialog = true;
  }

  showClubDeleteDialog(id) {
    this.clubDeleteId = id;
    this.displayDeleteClubDialog = true;
  }

  showTeamDeleteDialog(id) {
    this.teamDeleteId = id;
    this.displayDeleteTeamDialog = true;
  }

  onClubSubmit() {
    if (!this.clubService.club.id) {
      this.postClub();
    } else {
      this.editClub();
    }
  }

  getAllClubs() {
    this.clubService.getAllClubs().subscribe(res => {
      this.allClubs = res as IClub[];
    }, error => {
    }, () => {
      this.getTeams();
    });
  }

  private postClub() {
    this.clubService.postClub().subscribe(res => {
      this.clubService.club.id = res as string;
    }, error => {
    }, () => {
      this.allClubs.push(this.clubService.club);
      this.displayClubDialog = false;
    });
  }

  private editClub() {
    this.clubService.updateClub().subscribe(res => {
    }, error => {
    }, () => {
      const clubIndex = this.allClubs.findIndex(x => x.id === this.clubService.club.id);
      this.allClubs[clubIndex] = this.clubService.club;
      this.displayClubDialog = false;
    });
  }


  updateClub(club: IClub) {
    this.displayClubDialog = true;
    this.clubService.club = Object.assign({}, club);
  }

  onClubDelete() {
    this.clubService.deleteClub(this.clubDeleteId).subscribe(res => {
    }, error => {
    }, () => {
      const index = this.allClubs.findIndex(x => x.id === this.clubDeleteId);
      this.allClubs.splice(index, 1);
      this.displayDeleteClubDialog = false;
    });
  }


  onChangeTab(index) {
    this.tabIndex = index;
    this.getTeams();
  }

  onTeamSubmit() {
    if (!this.teamService.team.id) {
      this.postTeam();
    } else {
      this.editTeam();
    }
  }

  private postTeam() {
    this.teamService.team.clubId = this.allClubs[this.tabIndex].id;
    this.teamService.postTeam().subscribe(res => {
    }, error => {
    }, () => {
      this.allTeams.push(this.teamService.team);
      this.displayTeamDialog = false;
    });
  }

  private editTeam() {
    this.teamService.updateTeam().subscribe(res => {
    }, error => {
    }, () => {
      const teamIndex = this.allTeams.findIndex(z => z.id === this.teamService.team.id);
      this.allTeams[teamIndex] = this.teamService.team;
      this.displayTeamDialog = false;
    });
  }

  getTeams() {
    const clubId = this.allClubs[this.tabIndex].id;
    this.teamService.getAllTeams(clubId).subscribe(res => {
      this.allTeams = res as ITeam[];
    });
  }

  updateTeam(team: ITeam) {
    this.displayTeamDialog = true;
    this.teamService.team = Object.assign({}, team);
  }

  onTeamDelete() {
    this.teamService.deleteTeam(this.teamDeleteId).subscribe(res => {
    }, error => {
    }, () => {
      const i = this.allTeams.findIndex(x => x.id === this.teamDeleteId);
      this.allTeams.splice(i, 1);
      this.displayDeleteTeamDialog = false;
    });
  }

  showTeamDialog() {
    this.displayTeamDialog = true;
  }

  showPlayerDialog() {
    this.displayPlayerDialog = true;
  }
}
