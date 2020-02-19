import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../../Service/match.service';
import {ICategory} from '../../../Models/i-category';
import {IMatch} from '../../../Models/i-match';
import {CategoryService} from '../../../Service/category.service';
import {ActivatedRoute} from '@angular/router';
import {IAction} from '../../../Models/i-action';

@Component({
  selector: 'ngx-analysis-page-count',
  templateUrl: './analysis-page-count.component.html',
  styleUrls: ['./analysis-page-count.component.scss'],
})
export class AnalysisPageCountComponent implements OnInit {
  public categories: ICategory[];
  actionIndex: boolean;
  actionData: IAction = {} as IAction;
  countsData = [
    {
      teamAId: '83714999-ab30-ea11-a2e2-a7e3b419311e',
      actionA: 'Attack',
      countA: 4,
      descriptionA: 'Nice Attack',
      teamBId: '6f0a2932-ae30-ea11-a2e2-a7e3b419311e',
      actionB: 'Defence',
      countB: 2,
      descriptionB: 'Bad Defence',
    },
  ];

  constructor(public matchService: MatchService,
              public categoryService: CategoryService,
              public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.matchService.match.id = this.activatedRoute.snapshot.params.id;
    this.getMatchData();
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

  getPageCategory(id) {
    this.categoryService.getCategories(id).subscribe(res => {
      this.categories = res as ICategory[];
    });
  }

  getActionsCount(event) {
    this.actionData = event;
    if (this.isTeamA(this.matchService.match.teamA.id)) {
      // console.log(this.matchService.match);
    } else if (this.isTeamA(this.matchService.match.teamB.id)) {
      // console.log(this.matchService.match);
    }
  }

  getTeamData(team) {
    // console.log(team.id);
  }

  getActionIndex(event) {
    this.actionIndex = event;
  }

  addCount() {
    // console.log(this.countsData);
  }
}
