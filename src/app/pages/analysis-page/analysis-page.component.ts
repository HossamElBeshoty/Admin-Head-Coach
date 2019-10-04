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
  thirdFormGroup: FormGroup;
  isOptional = false;
  displayNewAnalysis = false;
  matches = [
    {date: '12/4/2019', teamA: 'Ahly', teamB: 'Zamalik'},
  ];




  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdControl: ['', Validators.required],
    });


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
