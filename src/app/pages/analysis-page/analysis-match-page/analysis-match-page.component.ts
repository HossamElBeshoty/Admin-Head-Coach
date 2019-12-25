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
import {AnalysisService} from '../../../Service/analysis.service';
import {IPostAnalyze, IVideoAnalysis} from '../../../Models/i-video-analysis';
import {AttackService} from '../../../Service/attack.service';
import {IAction} from '../../../Models/i-action';
import {IAttackAnalysis} from '../../../Models/i-attack-analysis';


@Component({
  selector: 'ngx-analysis-match-page',
  templateUrl: './analysis-match-page.component.html',
  styleUrls: ['./analysis-match-page.component.scss'],
})
export class AnalysisMatchPageComponent implements OnInit {
  attacks: IVideoAnalysis[] = [];
  rowGroupMetadata: any;
  public categories: ICategory[];
  public playersTeamA: IPlayer[];
  public playersTeamB: IPlayer[];
  public allVideos: IMatchVideo[] = [];
  youtubePath: string;
  videoID;
  videoOptions;
  playersData: IPlayer = {} as IPlayer;
  actionData: IAction = {} as IAction;
  actionIndex: boolean;
  attack = {} as IAttackAnalysis;
  isTeamAButton: boolean;
  isTeamBButton: boolean;
  timeFrom: number;
  timeTo: number;

  constructor(public categoryService: CategoryService,
              public matchService: MatchService,
              public matchVideoService: MatchVideoService,
              public activatedRoute: ActivatedRoute,
              public analysisService: AnalysisService,
              public attackService: AttackService,
              public playerService: PlayerService) {
  }

  ngOnInit() {
    this.matchService.match.id = this.activatedRoute.snapshot.params.id;
    this.getMatch();
  }

  getPlayersData(event) {
    this.playersData = event;
    if (!this.attack.analyzes) {
      this.attack.analyzes = [{} as IPostAnalyze];
    }
    if (this.isTeamA(this.playersData.teamId)) {
      this.attack.analyzes[0].playerAId = this.playersData.id;
      this.attack.analyzes[0].teamAId = this.playersData.teamId;
      this.isTeamAButton = true;
      this.isTeamBButton = false;
    } else {
      this.attack.analyzes[0].playerBId = this.playersData.id;
      this.attack.analyzes[0].teamBId = this.playersData.teamId;
      this.isTeamAButton = false;
      this.isTeamBButton = true;
    }
  }

  getActionsData(event) {
    this.actionData = event;
    if (!this.attack.analyzes) {
      this.attack.analyzes = [{} as IPostAnalyze];
    }
    if (this.isTeamA(this.playersData.teamId)) {
      this.attack.analyzes[0].actionOfTeamA = this.actionData.id;
      if (this.actionData.type === 4) {
        this.attack.analyzes[0].tacticOfTeamA = this.actionData.id;
      }
    } else {
      this.attack.analyzes[0].actionOfTeamB = this.actionData.id;
      if (this.actionData.type === 4) {
        this.attack.analyzes[0].tacticOfTeamB = this.actionData.id;
        this.attack.analyzes[0].tacticOfTeamB = this.actionData.id;
      }
    }
    if (!this.actionIndex) {
      this.timeFrom = this.videoOptions.getCurrentTime();
      this.attack.timeFrom = new Date(
        this.videoOptions.getCurrentTime() * 1000).toISOString().substr(11, 8);
      this.attack.analyzes[0].timeInVideo = Math.round(this.videoOptions.getCurrentTime());
      this.attack.analyzes[0].timeFrom = new Date(
        this.videoOptions.getCurrentTime() * 1000).toISOString().substr(11, 8);
      this.attack.videoId = this.videoID;
    } else {
      this.timeTo = this.videoOptions.getCurrentTime();
      this.attack.timeTo = new Date(this.videoOptions.getCurrentTime() * 1000).toISOString().substr(11, 8);
      this.attack.analyzes[0].timeTo = new Date(this.videoOptions.getCurrentTime() * 1000).toISOString().substr(11, 8);
      this.attack.duration = this.getDurationTime(this.timeTo, this.timeFrom);
      this.attack.analyzes[0].duration = this.attack.duration;
      // console.log(this.attack);
      this.attackService.postAttack(this.attack).subscribe(res => {
      }, error => {
      }, () => {
        this.attack = {} as IAttackAnalysis;
      });
    }
  }

  getActionIndex(event) {
    this.actionIndex = event;
  }

  getVideoMatchId(event) {
    this.videoID = event;
    this.getAllVideoAnalysis();
  }

  getVideoPlayer(event) {
    this.videoOptions = event;
  }

  getDurationTime(to, from) {
    return Math.round(to - from);
  }

  isTeamA(id: string) {
    return this.matchService.match.teamA.id === id;
  }

  onSort() {
    this.updateRowGroupMetaData2(this.attacks);
  }

  onFilter(event) {
    this.updateRowGroupMetaData2(event.filteredValue);
  }

  // customSort(event: SortEvent) {
  //   /*this.sort(event.data, 'ai', event.order);
  //   this.sort(event.data, event.field, event.order);*/
  //   this.updateRowGroupMetaData2(this.attacks);
  // }

  sort(array, field, order) {
    array.sort((data1, data2) => {
      const value1 = data1[field];
      const value2 = data2[field];
      let result = null;

      if (value1 == null && value2 != null) {
        result = -1;
      } else if (value1 != null && value2 == null) {
        result = 1;
      } else if (value1 == null && value2 == null) {
        result = 0;
      } else if (
        typeof value1 === 'string' &&
        typeof value2 === 'string'
      ) {
        result = value1.localeCompare(value2);
      } else {
        result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
      }
      return order * result;
    });

  }

  updateRowGroupMetaData2(data) {
    this.rowGroupMetadata = {};
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const rowData = data[i];
        const duration = rowData.ai;
        if (i === 0) {
          this.rowGroupMetadata[duration] = {index: 0, size: 1};
        } else {
          const previousRowData = data[i - 1];
          const previousRowGroup = previousRowData.ai;
          if (duration === previousRowGroup)
            this.rowGroupMetadata[duration].size++;
          else
            this.rowGroupMetadata[duration] = {index: i, size: 1};
        }
      }
    }
  }

  // updateRowGroupMetaData() {
  //   this.rowGroupMetadata = {};
  //   if (this.attacks) {
  //     for (let i = 0; i < this.attacks.length; i++) {
  //       const rowData = this.attacks[i];
  //       const duration = rowData.ai;
  //       if (i === 0) {
  //         this.rowGroupMetadata[duration] = {index: 0, size: 1};
  //       } else {
  //         const previousRowData = this.attacks[i - 1];
  //         const previousRowGroup = previousRowData.ai;
  //         if (duration === previousRowGroup)
  //           this.rowGroupMetadata[duration].size++;
  //         else
  //           this.rowGroupMetadata[duration] = {index: i, size: 1};
  //       }
  //     }
  //   }
  // }

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

  // changeYoutubeLink(path: string) {
  //   this.youtubePath = path;
  // }

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

  getAllVideoAnalysis() {
    this.analysisService.getVideoAnalysis(this.videoID, 'en').subscribe(res => {
      this.attacks = res as IVideoAnalysis[];
      this.updateRowGroupMetaData2(this.attacks);
    });
  }
}
