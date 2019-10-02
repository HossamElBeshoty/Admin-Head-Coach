import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/components/common/menuitem';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-analysis-page',
  templateUrl: './analysis-page.component.html',
  styleUrls: ['./analysis-page.component.scss'],
})
export class AnalysisPageComponent implements OnInit {
  items: MenuItem[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  displayNewAnalysis = false;
  matches = [
    {date: '12/4/2019', teamA: 'Ahly', teamB: 'Zamalik'},
  ];
  cars = [{
    name: 'FastBreak (15)',
    position: '33 min 12 Sec',
    duration: '6 Sec',
    standerdSet: '',
    possession: 'Team A',
    gameSet: 'Shot',
    crossDiscription: 'Back To Back',
    shotOutCome: 'Goal',
    goalPosition: 'Right Down',
    player: ' Hazem Hammed',
    penalty: '',
    score: '1:0',
  }];

  cols: any[];

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: '',
    });
    this.items = [
      {
        label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.update();
        },
      },
      {
        label: 'Delete', icon: 'pi pi-times', command: () => {
          this.delete();
        },
      },
    ];
    this.cols = [
      {field: 'name', header: 'Name', width: '20%'},
      {field: 'position', header: 'Position', width: '20%'},
      {field: 'duration', header: 'Duration', width: '20%'},
      {field: 'standerdSet', header: 'Stand. Set', width: '20%'},
      {field: 'possession', header: 'Poss.', width: '20%'},
      {field: 'gameSet', header: 'Game Set', width: '20%'},
      {field: 'crossDiscription', header: 'Cross Dis.', width: '20%'},
      {field: 'shotOutCome', header: 'Shot Out.', width: '20%'},
      {field: 'goalPosition', header: 'Goal Pos.', width: '20%'},
      {field: 'player', header: 'Player', width: '20%'},
      {field: 'penalty', header: 'Penalty', width: '20%'},
      {field: 'score', header: 'Score', width: '15%'},
    ];
  }

  save() {
    // tslint:disable-next-line:no-console
    console.log('Save Works');
  }

  update() {
    // tslint:disable-next-line:no-console
    console.log('Update Works');
  }

  delete() {
    // tslint:disable-next-line:no-console
    console.log('Delete Works');
  }


  showNewAnalysisDialog() {
    this.displayNewAnalysis = true;
  }
}
