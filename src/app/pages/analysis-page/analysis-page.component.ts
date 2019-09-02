import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'ngx-analysis-page',
  templateUrl: './analysis-page.component.html',
  styleUrls: ['./analysis-page.component.scss'],
})
export class AnalysisPageComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
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
}
