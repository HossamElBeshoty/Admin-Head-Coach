import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {CategoryService} from '../../../Service/category.service';
import {ICategory} from '../../../Models/i-category';
import {ActionService} from '../../../Service/action.service';
import {IAction} from '../../../Models/i-action';

@Component({
  selector: 'ngx-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  buttonsItems: MenuItem[];
  displayCategory: boolean = false;
  displayAddUpdateCategory: boolean = false;
  displayDeleteCategoryAction: boolean = false;
  displayUpdateButton: boolean = false;
  displayDeleteButton: boolean = false;
  @Input() pageName: string;
  @Input() categories: ICategory[];
  actions: IAction[] = [];
  deleteId;
  @Input() groupId;

  constructor(public categoryService: CategoryService, public actionService: ActionService) {
  }

  ngOnInit() {
    this.getActions();
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
    this.categoryService.category = {groupId: this.groupId} as ICategory;
  }

  addNewCategoryActionDialog(categoryId: string) {
    this.actionService.action = {categoryId: categoryId} as IAction;
    this.displayAddUpdateCategory = true;
  }

  updateNewCategoryActionDialog(category: ICategory) {
    this.displayCategory = true;
    this.categoryService.category = Object.assign({}, category);
  }

  updateButton() {
    this.displayUpdateButton = true;
  }

  deleteCategoryActionDialog(id) {
    this.deleteId = id;
    this.displayDeleteCategoryAction = true;
  }

  deleteButton() {
    this.displayDeleteButton = true;
  }

  onSubmit() {
    if (!this.categoryService.category.id) {
      this.postCategory();
    } else {
      this.updateCategory();
    }
  }

  private postCategory() {
    this.categoryService.category.groupId = this.groupId;
    this.categoryService.postCategory().subscribe(res => {
      this.categoryService.category.id = res as string;
    }, err => {
    }, () => {
      this.categories.push(this.categoryService.category);
      this.displayCategory = false;
    });
  }

  private updateCategory() {
    this.categoryService.updateCategory().subscribe(res => {
    }, err => {
    }, () => {
      const updateCategoryIndex = this.categories.findIndex(z => z.id === this.categoryService.category.id);
      this.categories[updateCategoryIndex] = this.categoryService.category;
      this.displayCategory = false;
    });
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.deleteId).subscribe(res => {
    }, () => {
    }, () => {
      const categoryIndex = this.categories.findIndex(x => x.id === this.deleteId);
      this.categories.splice(categoryIndex, 1);
      this.displayDeleteCategoryAction = false;
    });
  }

  onActionSubmit() {
    this.postNewAction();
  }

  postNewAction() {
    this.actionService.postAction().subscribe(res => {
      // this.actionService.action.id = res as string;
    }, error => {
    }, () => {
      const category = this.categories.find(c => c.id === this.actionService.action.categoryId);
      category.actions.push(this.actionService.action);
      this.displayAddUpdateCategory = false;
    });
  }

  getActions() {
    this.actionService.getActions('c596df6f-4b04-ea11-bfaf-180373b9b532').subscribe(res => {
      this.actions = res as IAction[];
    });
  }
}
