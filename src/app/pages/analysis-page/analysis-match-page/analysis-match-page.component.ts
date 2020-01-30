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
import {ChildActionService} from '../../../Service/child-action.service';
import {IChildAction} from '../../../Models/i-child-action';


@Component({
  selector: 'ngx-analysis-match-page',
  templateUrl: './analysis-match-page.component.html',
  styleUrls: ['./analysis-match-page.component.scss'],
})
export class AnalysisMatchPageComponent implements OnInit {
  showMyTeamAPlayers: boolean = true;
  showMyTeamBPlayers: boolean = true;
  displayTeamA: boolean = false;
  displayTeamB: boolean = false;
  attacks: IVideoAnalysis[] = [];
  watchAttack: IVideoAnalysis = {} as IVideoAnalysis;
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
  cols: any[];
  displayEndWithAction: boolean = false;
  displayDeleteAttack: boolean = false;
  childActionData: IChildAction[];
  attackDeleteId;

  constructor(public categoryService: CategoryService,
              public matchService: MatchService,
              public matchVideoService: MatchVideoService,
              public activatedRoute: ActivatedRoute,
              public analysisService: AnalysisService,
              public childActionService: ChildActionService,
              public attackService: AttackService,
              public playerService: PlayerService) {
  }

  ngOnInit() {
    this.matchService.match.id = this.activatedRoute.snapshot.params.id;
    this.getMatch();
    this.cols = [
      {field: 'sa', header: 'Type'},
      {field: 'aa', header: 'Action'},
      {field: 'pa', header: 'Player'},
      {field: 'ca', header: 'Tactic'},
      {field: 'ea', header: 'Result'},
      {field: 'ti', header: 'Seconds'},
      {field: 'sb', header: 'Type'},
      {field: 'ab', header: 'Action'},
      {field: 'pb', header: 'Player'},
      {field: 'cb', header: 'Tactic'},
      {field: 'eb', header: 'Result'},
    ];
  }

  getPlayersData(event) {
    this.playersData = event;
    if (!this.attack.analyzes) {
      this.attack.analyzes = [{} as IPostAnalyze];
    }
    if (this.isTeamA(this.playersData.teamId)) {
      this.attack.analyzes[0].playerAId = this.playersData.id;
      this.watchAttack.pa = this.playersData.nameAr;
      this.attack.analyzes[0].teamAId = this.playersData.teamId;
      this.watchAttack.ta = this.playersData.clubNameEn;
      this.isTeamAButton = true;
      this.isTeamBButton = false;
    } else {
      this.attack.analyzes[0].playerBId = this.playersData.id;
      this.watchAttack.pb = this.playersData.nameEn;
      this.attack.analyzes[0].teamBId = this.playersData.teamId;
      this.watchAttack.tb = this.playersData.clubNameEn;
      this.isTeamAButton = false;
      this.isTeamBButton = true;
    }
  }

  getActionsData(event) {
    this.actionData = event;
    if (!this.attack.analyzes) {
      this.attack.analyzes = [{} as IPostAnalyze];
    }
    if (this.actionData.type === 3) {
      this.displayEndWithAction = true;
      this.childActionService.getAllByActionId(this.actionData.id).subscribe(res => {
        this.childActionData = res as IChildAction[];
      });
    }
    if (this.isTeamA(this.playersData.teamId) || this.playersData.teamId === undefined) {
      if (this.actionData.type.toString() === '4') {
        this.attack.analyzes[0].tacticOfTeamA = this.actionData.id;
        this.watchAttack.ca = this.actionData.nameAr;
      } else if (this.actionData.type.toString() === '1') {
        this.attack.analyzes[0].startActionOfTeamA = this.actionData.id;
        this.watchAttack.sa = this.actionData.nameAr;
      } else if (this.actionData.type.toString() === '2' || this.actionData.type.toString() === '3') {
        this.attack.analyzes[0].endActionOfTeamA = this.actionData.id;
        this.watchAttack.ea = this.actionData.nameAr;
      } else {
        this.attack.analyzes[0].actionOfTeamA = this.actionData.id;
        this.watchAttack.aa = this.actionData.nameAr;
      }
    } else {
      if (this.actionData.type.toString() === '4') {
        this.attack.analyzes[0].tacticOfTeamB = this.actionData.id;
        this.watchAttack.cb = this.actionData.nameAr;
      } else if (this.actionData.type.toString() === '2' || this.actionData.type.toString() === '3') {
        this.attack.analyzes[0].endActionOfTeamB = this.actionData.id;
        this.watchAttack.eb = this.actionData.nameAr;
      } else if (this.actionData.type.toString() === '1') {
        this.attack.analyzes[0].startActionOfTeamB = this.actionData.id;
        this.watchAttack.sb = this.actionData.nameAr;
      } else {
        this.attack.analyzes[0].actionOfTeamB = this.actionData.id;
        this.watchAttack.ab = this.actionData.nameAr;
      }
    }
    if (!this.actionIndex) {
      this.timeFrom = this.videoOptions.getCurrentTime();
      this.attack.timeFrom = new Date(
        this.videoOptions.getCurrentTime() * 1000).toISOString().substr(11, 8);
      this.attack.analyzes[0].timeInVideo = Math.round(this.videoOptions.getCurrentTime());
      this.watchAttack.ti = this.attack.analyzes[0].timeInVideo.toString();
      this.attack.analyzes[0].timeFrom = new Date(
        this.videoOptions.getCurrentTime() * 1000).toISOString().substr(11, 8);
      this.attack.videoId = this.videoID;
    } else {
      this.timeTo = this.videoOptions.getCurrentTime();
      this.attack.timeTo = new Date(this.videoOptions.getCurrentTime() * 1000).toISOString().substr(11, 8);
      this.attack.analyzes[0].timeTo = new Date(this.videoOptions.getCurrentTime() * 1000).toISOString().substr(11, 8);
      this.attack.duration = this.getDurationTime(this.timeTo, this.timeFrom);
      this.attack.analyzes[0].duration = this.attack.duration;
      this.watchAttack.d = this.attack.duration.toString();
      this.postAttack(this.attack);
    }
  }

  postAttack(attack: IAttackAnalysis) {
    this.attackService.postAttack(attack).subscribe(res => {
    }, error => {
    }, () => {
      this.attack = {} as IAttackAnalysis;
      this.watchAttack = {} as IVideoAnalysis;
      this.attacks.push(this.watchAttack);
    });
  }

  postChildActionInMatchAnalysis(childActionId) {
    if (this.isTeamA(this.playersData.teamId) || this.playersData.teamId === undefined) {
      this.attack.analyzes[0].childActionOfTeamA = childActionId;
    } else {
      this.attack.analyzes[0].childActionOfTeamB = childActionId;
    }
    this.postAttack(this.attack);
    this.displayEndWithAction = false;
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
    }, error => {
    }, () => {
      this.attacks.push(this.watchAttack);
    });
  }

  convertTimeToSeconds(hms: string) {
    const a = hms.split(':');
    const seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    return seconds;
  }

  playVideoInTime(id) {
    const playAttack = this.attacks.find(c => c.id === id);
    const startSeconds = this.convertTimeToSeconds(playAttack.tf) - 5;
    const endSeconds = ((this.convertTimeToSeconds(playAttack.tt) - startSeconds) + 5) * 1000;
    const vId = this.videoOptions.getVideoData().video_id;
    this.videoOptions.cueVideoById(vId, startSeconds);
    this.videoOptions.playVideo();
    setTimeout(() => {
      this.videoOptions.pauseVideo();
    }, endSeconds);

  }


  displayAttackDelete(attackId) {
    this.attackDeleteId = attackId;
    this.displayDeleteAttack = true;
  }

  deleteOneAttack() {
    this.attackService.deleteAttack(this.attackDeleteId).subscribe(res => {
    }, error => {
    }, () => {
      const index = this.attacks.findIndex(c => c.ai === this.attackDeleteId);
      this.attacks.splice(index, 1);
      this.displayDeleteAttack = false;
    });
  }
}
