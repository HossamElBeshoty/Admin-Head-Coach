import { ICountAnalyze } from './../../../Models/i-countAnalyze';
import { CountAnalyzeService } from './../../../Service/countAnalyze.service';
import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../../Service/match.service';
import { ICategory } from '../../../Models/i-category';
import { IMatch } from '../../../Models/i-match';
import { CategoryService } from '../../../Service/category.service';
import { ActivatedRoute } from '@angular/router';
import { IAction } from '../../../Models/i-action';

@Component({
  selector: 'ngx-analysis-page-count',
  templateUrl: './analysis-page-count.component.html',
  styleUrls: ['./analysis-page-count.component.scss'],
})
export class AnalysisPageCountComponent implements OnInit {
  public categories: ICategory[];
  actionIndex: boolean;
  actionData: IAction = {} as IAction;

  activatedTeamA: boolean = false;
  activatedTeamB: boolean = false;
  constructor(
    public matchService: MatchService,
    public categoryService: CategoryService,
    public countAnalyzeService: CountAnalyzeService,
    public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.matchService.match.id = this.activatedRoute.snapshot.params.id;
    this.getMatchData();
    this.getAllCountAnalyzes();
  }

  getMatchData() {
    this.matchService.getMatchById(this.matchService.match.id).subscribe(res => {
      this.matchService.match = res as IMatch;
    }, error => {
    }, () => {
      this.getPageCategory(this.matchService.match.groupId);
    });
  }

  isTeamA(id: string) {
    return this.matchService.match.teamA.id === id;
  }

  getAllCountAnalyzes() {
    this.countAnalyzeService.getAllCountAnalyzes(this.matchService.match.id).subscribe(res => {
      this.countAnalyzeService.CountAnalyzeList = res as ICountAnalyze[];
    });
  }
  getPageCategory(id) {
    this.categoryService.getCategories(id).subscribe(res => {
      this.categories = res as ICategory[];
    });
  }

  getActionsCount(event) {
    this.actionData = event;
    const index = this.countAnalyzeService.CountAnalyzeList.findIndex(c => c.actionId === this.actionData.id);

    if (index === -1) {
      this.countAnalyzeService.CountAnalyze = {
        actionId: this.actionData.id,
        teamAId: this.matchService.match.teamA.id,
        teamBId: this.matchService.match.teamB.id,
        countOfTeamA: 0,
        countOfTeamB: 0,
        matchId: this.matchService.match.id,
        actionNameEn: this.actionData.nameEn,
         actionNameAr: this.actionData.nameAr,
      };
      if (this.activatedTeamB) {
        this.countAnalyzeService.CountAnalyze.countOfTeamB += 1;
      } else {
        this.countAnalyzeService.CountAnalyze.countOfTeamA += 1;
      }
      this.countAnalyzeService.postCountAnalyze().subscribe(res => {
        this.countAnalyzeService.CountAnalyze.id = res as string;
      }, () => { }, () => {
        this.countAnalyzeService.CountAnalyzeList.push(this.countAnalyzeService.CountAnalyze);
      });

    } else {
      const selectedData = this.countAnalyzeService.CountAnalyzeList.find(c => c.actionId === this.actionData.id);
      if (this.activatedTeamB) {
        selectedData.countOfTeamB += 1;
      } else {
        selectedData.countOfTeamA += 1;
      }
    }


  }

  getTeamData(team) {
    // console.log(team.id);
  }

  getActionIndex(event) {
    this.actionIndex = event;
  }

  addCount() {
    this.countAnalyzeService.updateCountAnalyze().subscribe();
  }
}
