import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'ngx-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  actionsFunctionality: MenuItem[];
  actionsTypeFunctionality: MenuItem[];
  buttonsItems: MenuItem[];
  displayCategory: boolean = false;
  displayAddUpdateCategory: boolean = false;
  displayDeleteCategoryAction: boolean = false;
  displayUpdateButton: boolean = false;
  displayDeleteButton: boolean = false;
  @Input() pageName: string;
  constructor() {
  }

  ngOnInit() {
    this.actionsTypeFunctionality = [
      {
        label: 'Update Action', icon: 'pi pi-refresh', command: () => {
          this.updateNewCategoryActionDialog();
        },
      },
      {
        label: 'Delete Action', icon: 'pi pi-times', command: () => {
          this.deleteCategoryActionDialog();
        },
      },
    ];
    this.buttonsItems = [
      {
        label: 'Update Button', icon: 'pi pi-refresh', command: () => {
          this.updateButton();
        },
      },
      {
        label: 'Delete Button', icon: 'pi pi-times', command: () => {
          this.deleteButton();
        },
      },
    ];
  }

  showCategoryDialog() {
    this.displayCategory = true;
  }

  addNewCategoryActionDialog() {
    this.displayAddUpdateCategory = true;
  }

  updateNewCategoryActionDialog() {
    this.displayAddUpdateCategory = true;
  }

  updateButton() {
    this.displayUpdateButton = true;
  }

  deleteCategoryActionDialog() {
    this.displayDeleteCategoryAction = true;
  }

  deleteButton() {
    this.displayDeleteButton = true;
  }
}
