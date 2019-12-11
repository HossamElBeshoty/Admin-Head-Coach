import {Component, OnInit} from '@angular/core';
import {ICategory} from '../../../Models/i-category';
import {CategoryService} from '../../../Service/category.service';
import {MatchService} from '../../../Service/match.service';
import {ActivatedRoute} from '@angular/router';
import {IMatch} from '../../../Models/i-match';
import {PlayerService} from '../../../Service/player.service';
import {IPlayer} from '../../../Models/i-player';
import {MatchVideoService} from '../../../Service/match-video.service';
import {IMatchVideo} from '../../../Models/i-match-video';


@Component({
  selector: 'ngx-analysis-match-page',
  templateUrl: './analysis-match-page.component.html',
  styleUrls: ['./analysis-match-page.component.scss'],
})
export class AnalysisMatchPageComponent implements OnInit {
  attacks = [{
    duration: '15s',
    teamA: 'El Zamalik',
    actionOFTeamA: 'SHot',
    playerAName: 'Amr Zaki',
    timeInVideo: '23',
    taktikOfTeamA: 'shot',
    teamB: 'Ahly',
    playerBName: 'Hadary',
    actionOFTeamB: 'defence',
    taktikOfTeamB: 'defence',
  }, {
    duration: '15s',
    teamA: 'El Zamalik',
    actionOFTeamA: 'SHot',
    playerAName: 'Amr Zaki',
    timeInVideo: '23',
    taktikOfTeamA: 'shot',
    teamB: 'Ahly',
    playerBName: 'Hadary',
    actionOFTeamB: 'defence',
    taktikOfTeamB: 'defence',
  }, {
    duration: '25s',
    teamA: 'El Zamalik',
    actionOFTeamA: 'SHot',
    playerAName: 'Amr Zaki',
    timeInVideo: '23',
    taktikOfTeamA: 'shot',
    teamB: 'Ahly',
    playerBName: 'Hadary',
    actionOFTeamB: 'defence',
    taktikOfTeamB: 'defence',
  }, {
    duration: '15s',
    teamA: 'El Zamalik',
    actionOFTeamA: 'SHot',
    playerAName: 'Amr Zaki',
    timeInVideo: '23',
    taktikOfTeamA: 'shot',
    teamB: 'Ahly',
    playerBName: 'Hadary',
    actionOFTeamB: 'defence',
    taktikOfTeamB: 'defence',
  }, {
    duration: '25s',
    teamA: 'El Zamalik',
    actionOFTeamA: 'SHot',
    playerAName: 'Amr Zaki',
    timeInVideo: '23',
    taktikOfTeamA: 'shot',
    teamB: 'Ahly',
    playerBName: 'Hadary',
    actionOFTeamB: 'defence',
    taktikOfTeamB: 'defence',
  }, {
    duration: '15s',
    teamA: 'El Zamalik',
    actionOFTeamA: 'SHot',
    playerAName: 'Amr Zaki',
    timeInVideo: '23',
    taktikOfTeamA: 'shot',
    teamB: 'Ahly',
    playerBName: 'Hadary',
    actionOFTeamB: 'defence',
    taktikOfTeamB: 'defence',
  }, {
    duration: '25s',
    teamA: 'El Zamalik',
    actionOFTeamA: 'SHot',
    playerAName: 'Amr Zaki',
    timeInVideo: '23',
    taktikOfTeamA: 'shot',
    teamB: 'Ahly',
    playerBName: 'Hadary',
    actionOFTeamB: 'defence',
    taktikOfTeamB: 'defence',
  }, {
    duration: '15s',
    teamA: 'El Zamalik',
    actionOFTeamA: 'SHot',
    playerAName: 'Amr Zaki',
    timeInVideo: '23',
    taktikOfTeamA: 'shot',
    teamB: 'Ahly',
    playerBName: 'Hadary',
    actionOFTeamB: 'defence',
    taktikOfTeamB: 'defence',
  }, {
    duration: '25s',
    teamA: 'El Zamalik',
    actionOFTeamA: 'SHot',
    playerAName: 'Amr Zaki',
    timeInVideo: '23',
    taktikOfTeamA: 'shot',
    teamB: 'Ahly',
    playerBName: 'Hadary',
    actionOFTeamB: 'defence',
    taktikOfTeamB: 'defence',
  }];
  rowGroupMetadata: any;
  public categories: ICategory[];
  public playersTeamA: IPlayer[];
  public playersTeamB: IPlayer[];
  public allVideos: IMatchVideo[] = [];
  youtubePath: string;

  constructor(public categoryService: CategoryService,
              public matchService: MatchService,
              public matchVideoService: MatchVideoService,
              public activatedRoute: ActivatedRoute,
              public playerService: PlayerService) {
  }

  ngOnInit() {
    this.updateRowGroupMetaData();
    this.matchService.match.id = this.activatedRoute.snapshot.params.id;
    this.getMatch();
    // this.cols = [
    //   {field: 'name', header: 'Name', width: '20%'},
    //   {field: 'position', header: 'Position', width: '20%'},
    //   {field: 'duration', header: 'Duration', width: '20%'},
    //   {field: 'standerdSet', header: 'Stand. Set', width: '20%'},
    //   {field: 'possession', header: 'Poss.', width: '20%'},
    //   {field: 'gameSet', header: 'Game Set', width: '20%'},
    //   {field: 'crossDiscription', header: 'Cross Dis.', width: '20%'},
    //   {field: 'shotOutCome', header: 'Shot Out.', width: '20%'},
    //   {field: 'goalPosition', header: 'Goal Pos.', width: '20%'},
    //   {field: 'player', header: 'Player', width: '20%'},
    //   {field: 'penalty', header: 'Penalty', width: '20%'},
    //   {field: 'score', header: 'Score', width: '15%'},
    // ];
  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.attacks) {
      for (let i = 0; i < this.attacks.length; i++) {
        const rowData = this.attacks[i];
        const duration = rowData.duration;
        if (i === 0) {
          this.rowGroupMetadata[duration] = {index: 0, size: 1};
        } else {
          const previousRowData = this.attacks[i - 1];
          const previousRowGroup = previousRowData.duration;
          if (duration === previousRowGroup)
            this.rowGroupMetadata[duration].size++;
          else
            this.rowGroupMetadata[duration] = {index: i, size: 1};
        }
      }
    }
  }

  getPageCategory(id) {
    this.categoryService.getCategories(id).subscribe(res => {
      this.categories = res as ICategory[];
    });
  }

  getTeamPlayers(teamId: string, isTeamA: boolean) {
    this.playerService.getFormulationPlayers(teamId, this.matchService.match.id).subscribe(res => {
      if (isTeamA) {
        this.playersTeamA = res as IPlayer[];
      } else {
        this.playersTeamB = res as IPlayer[];
      }
    });
  }

  getVideos() {
    this.matchVideoService.getMatchVideos(this.matchService.match.id).subscribe(res => {
      this.allVideos = res as IMatchVideo[];
      this.youtubePath = this.allVideos[0].path;
    });
  }

  changeYoutubeLink(path: string) {
    this.youtubePath = path;
  }

  getMatch() {
    this.matchService.getMatchById(this.matchService.match.id).subscribe(res => {
      this.matchService.match = res as IMatch;
    }, error => {
    }, () => {
      this.getPageCategory(this.matchService.match.groupId);
      this.getTeamPlayers(this.matchService.match.teamAId, true);
      this.getTeamPlayers(this.matchService.match.teamBId, false);
      this.getVideos();
    });
  }
}
