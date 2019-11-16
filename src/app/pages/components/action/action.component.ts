import {Component, Input, OnInit} from '@angular/core';
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
  displayCategory: boolean = false;
  displayAddUpdateCategory: boolean = false;
  displayDeleteCategoryAction: boolean = false;
  displayUpdateButton: boolean = false;
  displayDeleteButton: boolean = false;
  @Input() pageName: string;
  @Input() categories: ICategory[];
  actions: IAction[] = [];
  deleteId;
  actionDeleteId;
  @Input() groupId;

  constructor(public categoryService: CategoryService, public actionService: ActionService) {
  }

  ngOnInit() {
    this.getActions();
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

  updateButton(action: IAction) {
    this.displayAddUpdateCategory = true;
    this.actionService.action = Object.assign({}, action);
  }

  deleteCategoryActionDialog(id) {
    this.deleteId = id;
    this.displayDeleteCategoryAction = true;
  }

  deleteButton(id) {
    this.actionDeleteId = id;
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
    if (!this.actionService.action.id) {
      this.postNewAction();
    } else {
      this.updateAction();
    }
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

  private updateAction() {
    this.actionService.updateAction().subscribe(res => {
    }, error => {
    }, () => {
      const actionIndex = this.actions.findIndex(c => c.id === this.actionService.action.id);
      this.actions[actionIndex] = this.actionService.action;
      this.displayAddUpdateCategory = false;
    });
  }

  onActionDelete() {
    this.actionService.deleteAction(this.actionDeleteId).subscribe(res => {
    }, error => {
    }, () => {
      const i = this.actions.findIndex(c => c.id === this.actionDeleteId);
      this.actions.splice(i, 1);
      this.displayDeleteButton = false;
    });
  }

  getActions() {
    this.actionService.getActions('c596df6f-4b04-ea11-bfaf-180373b9b532').subscribe(res => {
      this.actions = res as IAction[];
    });
  }
}
