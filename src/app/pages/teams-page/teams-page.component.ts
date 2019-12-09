import {Component, OnInit} from '@angular/core';
import {ClubService} from '../../Service/club.service';
import {TeamService} from '../../Service/team.service';
import {PlayerService} from '../../Service/player.service';
import {IClub} from '../../Models/i-club';
import {ITeam} from '../../Models/i-team';
import {IPlayer} from '../../Models/i-player';
import {environment} from '../../../environments/environment';

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
  displayDeletePlayerDialog: boolean = false;
  displayCropImageDialog: boolean = false;
  displayCropPlayerImageDialog: boolean = false;
  allClubs: IClub[] = [];
  allTeams: ITeam[] = [];
  allPlayers: IPlayer[] = [];
  tabIndex = 0;
  clubDeleteId;
  teamDeleteId;
  playerDeleteId;
  allNationalities;
  apiEndPoint = environment.apiEndPoint;
  defaultTeam = ['LW', 'LB', 'CB', 'RB', 'RW', 'PV', 'GK'];

  constructor(public clubService: ClubService, public teamService: TeamService, public playerService: PlayerService) {
  }

  ngOnInit() {
    this.getAllClubs();
    this.getNationality();
  }

  showClubDialog() {
    this.displayClubDialog = true;
  }

  showPlayerImageCropper() {
    this.displayCropPlayerImageDialog = true;
  }

  showCropImageDialog() {
    this.displayCropImageDialog = true;
  }

  displayImg(event: any) {
    this.clubService.club.logoPath = event;
    // this.imagePath = event;
  }

  displayPlayerImg(event: any) {
    this.playerService.player.imagePath = event;
  }

  showClubDeleteDialog(id) {
    this.clubDeleteId = id;
    this.displayDeleteClubDialog = true;
  }

  showTeamDeleteDialog(id) {
    this.teamDeleteId = id;
    this.displayDeleteTeamDialog = true;
  }

  showPlayerDeleteDialog(id) {
    this.playerDeleteId = id;
    this.displayDeletePlayerDialog = true;
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
      this.onChangeTab(0);
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

  showPlayerDialog(teamId: string) {
    this.playerService.player.teamId = teamId;
    this.displayPlayerDialog = true;
  }

  onPlayerSubmit() {
    if (!this.playerService.player.id) {
      this.postPlayer();
    } else {
      this.editPlayer();
    }
  }

  private postPlayer() {
    this.playerService.postPlayer().subscribe(res => {
    }, error => {
    }, () => {
      this.allPlayers.push(this.playerService.player);
      this.displayPlayerDialog = false;
    });
  }

  getAllPlayers(id) {
    this.playerService.getPlayers(id).subscribe(res => {
      this.allPlayers = res as IPlayer[];
    });
  }

  updatePlayer(player: IPlayer) {
    this.displayPlayerDialog = true;
    this.playerService.player = Object.assign({}, player);
  }

  private editPlayer() {
    this.playerService.putPlayer().subscribe(res => {
    }, error => {
    }, () => {
      const playerIndex = this.allPlayers.findIndex(y => y.id === this.playerService.player.id);
      this.allPlayers[playerIndex] = this.playerService.player;
      this.displayPlayerDialog = false;
    });
  }

  onPlayerDelete() {
    this.playerService.deletePlayer(this.playerDeleteId).subscribe(res => {
    }, error => {
    }, () => {
      const z = this.allPlayers.findIndex(x => x.id === this.playerDeleteId);
      this.allPlayers.splice(z, 1);
      this.displayDeletePlayerDialog = false;
    });
  }

  getNationality() {
    this.playerService.getAllNationality().subscribe(res => {
      this.allNationalities = res;
    });
  }

  addDefaultPlayers(teamId) {
    for (let x = 0; x < this.defaultTeam.length; x++) {
      const startPlayer: IPlayer = {
        nameAr: this.defaultTeam[x],
        nameEn: this.defaultTeam[x],
        nickNameEn: this.defaultTeam[x],
        nickNameAr: this.defaultTeam[x],
        teamId: teamId,
      };
      this.playerService.player = startPlayer;
      this.playerService.postPlayer().subscribe(res => {
      }, error => {
      }, () => {
        this.allPlayers.push(startPlayer);
      });
    }
  }
}
