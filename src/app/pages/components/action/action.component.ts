import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {CategoryService} from '../../../Service/category.service';
import {ICategory} from '../../../Models/i-category';

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
  @Input() groupId: string;
  categories: ICategory[] = [];

  constructor(public categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getPageCategory(this.groupId);
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

  getPageCategory(id) {
    this.categoryService.getCategories(id).subscribe(res => {
      this.categories = res as ICategory[];
    });
  }

  onSubmit() {
    this.postCategory();
  }

  postCategory() {
    this.categoryService.category.groupId = this.groupId;
    this.categoryService.postCategory().subscribe(res => {
    }, err => {
    }, () => {
      this.categories.push(this.categoryService.category);
      this.displayCategory = false;
    });
  }
}
