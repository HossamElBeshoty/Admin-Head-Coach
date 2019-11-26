import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/components/common/menuitem';
import {ClubService} from '../../Service/club.service';
import {TeamService} from '../../Service/team.service';
import {IClub} from '../../Models/i-club';
import {GroupService} from '../../Service/group.service';
import {IGroup} from '../../Models/i-group';
import {ITeam} from '../../Models/i-team';
import {MatchService} from '../../Service/match.service';
import {IMatch} from '../../Models/i-match';
import {PlayerService} from '../../Service/player.service';
import {IPlayer} from '../../Models/i-player';
import {IFormation} from '../../Models/i-formation';
import {IMatchVideo} from '../../Models/i-match-video';

@Component({
  selector: 'ngx-analysis-page',
  templateUrl: './analysis-page.component.html',
  styleUrls: ['./analysis-page.component.scss'],
})
export class AnalysisPageComponent implements OnInit {
  items: MenuItem[];
  displayNewAnalysis = false;
  cols: any[];
  matchs = [
    {id: 1, date: '12/4/2018', teamA: 'Al Ahly SC', teamB: 'Zamalek SC'},
    {id: 2, date: '19/4/2018', teamA: 'FC Barcelona', teamB: 'Liverpool F.C.'},
  ];
  allMatches: IMatch[] = [];
  allClubs: IClub[] = [];
  allGroups: IGroup[] = [];
  allTeamsA: ITeam[] = [];
  allTeamsB: ITeam[] = [];
  allPlayersA: IPlayer[] = [];
  allPlayersB: IPlayer[] = [];
  targetPlayerA: IPlayer[] = [];
  targetPlayerB: IPlayer[] = [];
  youtubeInput = [1];

  constructor(public clubsService: ClubService,
              public teamsService: TeamService,
              public groupService: GroupService,
              public playerService: PlayerService,
              public matchesService: MatchService) {
  }

  ngOnInit() {
    this.matchesService.match.formations = [];
    this.matchesService.match.matchVideos = [];
    this.addNewYoutubeInput();
    this.cols = [
      {field: 'date', header: 'Match Date'},
      {field: 'teamA', header: 'Team A'},
      {field: 'teamB', header: 'Team B'},
    ];
    this.getAllClubs();
    this.getAllGroups();
  }

  update() {
    // tslint:disable-next-line:no-console
    console.log('Update Works');
  }

  showNewAnalysisDialog() {
    this.displayNewAnalysis = true;
  }

  getAllClubs() {
    this.clubsService.getAllClubs().subscribe(res => {
      this.allClubs = res as IClub[];
    });
  }

  getAllGroups() {
    this.groupService.getAllGroupPages().subscribe(res => {
      this.allGroups = res as IGroup[];
    });
  }

  getAllTeams(clubId: string, isTeamA: boolean) {
    this.teamsService.getAllTeams(clubId).subscribe(res => {
      if (isTeamA) {
        this.allTeamsA = res as ITeam[];
      } else {
        this.allTeamsB = res as ITeam[];
      }
    });
  }

  getAllPlayers() {
    const teamAId = this.matchesService.match.teamAId;
    const teamBId = this.matchesService.match.teamBId;
    this.playerService.getPlayers(teamAId).subscribe(res => {
      this.allPlayersA = res as IPlayer[];
    });
    this.playerService.getPlayers(teamBId).subscribe(res => {
      this.allPlayersB = res as IPlayer[];
    });
  }

  addNewYoutubeInput() {
    const obj: IMatchVideo = {
      path: '',
    };
    this.matchesService.match.matchVideos.push(obj);
  }

  deleteYoutubeInput(i) {
    this.matchesService.match.matchVideos.splice(i, 1);
  }

  addFormation(isTeamA: boolean) {
    if (isTeamA) {
      this.targetPlayerA.forEach(item => {
        const obj: IFormation = {
          teamId: item.teamId,
          playerId: item.id,
          time: null,
          status: 1,
        };
        this.matchesService.match.formations.push(obj);
      });
    } else {
      this.targetPlayerB.forEach(item => {
        const obj: IFormation = {
          teamId: item.teamId,
          playerId: item.id,
          time: null,
          status: 1,
        };
        this.matchesService.match.formations.push(obj);
      });
    }
  }

  onSubmit() {
    this.matchesService.postNewMatch().subscribe(res => {
    }, error => {
    }, () => {
    });
    // console.log(this.matchesService.match)
  }
}

