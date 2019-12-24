import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../../Service/category.service';
import {ICategory} from '../../../Models/i-category';
import {ActionService} from '../../../Service/action.service';
import {IAction} from '../../../Models/i-action';
import {ChildActionService} from '../../../Service/child-action.service';
import {IChildAction} from '../../../Models/i-child-action';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  @Input() pageName: string;
  @Input() categories: ICategory[]= [];
  @Input() groupId;
  @Input() hasDefault;
  displayCategory: boolean = false;
  displayAddUpdateCategory: boolean = false;
  displayDeleteCategoryAction: boolean = false;
  displayChildActions: boolean = false;
  displayDeleteButton: boolean = false;
  deleteId;
  actionDeleteId;
  childAction: IChildAction[] = [];
  cols: any[];
  childActionName;
  defaultCategories = [
    {
      id: 1,
      name: 'Start',
    }, {
      id: 2,
      name: 'End',
    }, {
      id: 3,
      name: 'End WIth Action',
    }, {
      id: 4,
      name: 'Tactics',
    }, {
      id: 5,
      name: 'Penalties',
    },
  ];


  constructor(public categoryService: CategoryService,
              public actionService: ActionService,
              public childActionService: ChildActionService) {
  }

  ngOnInit() {


    this.cols = [
      {field: 'nameAr', header: 'Arabic Name'},
      {field: 'nameEn', header: 'English Name'},
    ];
  }

  showCategoryDialog() {
    this.displayCategory = true;
    this.categoryService.category = {groupId: this.groupId} as ICategory;
  }

  addNewCategoryActionDialog(categoryId: string, type: number) {
    this.actionService.action = {} as IAction;
    this.actionService.action.categoryId = categoryId;
    this.actionService.action.type = type;
    this.displayAddUpdateCategory = true;
    this.childAction = [];
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

  deleteButton(action: IAction) {
    this.actionDeleteId = action.id;
    this.actionService.action.categoryId = action.categoryId;
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
   /* this.actionService.action.type = this.categoryService.category.type;*/
    if (!this.actionService.action.id) {
      this.postNewAction();
    } else {
      this.updateAction();
    }
  }

  postNewAction() {
    this.actionService.postAction().subscribe(res => {
      this.actionService.action.id = res as string;
    }, error => {
    }, () => {
      if (this.actionService.action.type === 3) {
        this.displayChildActions = true;
      }
      const category = this.categories.find(c => c.id === this.actionService.action.categoryId);
      if (!category.actions) {
        category.actions = [];
      }
      category.actions.push(this.actionService.action);
      this.displayAddUpdateCategory = false;
    });
  }

  private updateAction() {
    this.actionService.updateAction().subscribe(res => {
    }, error => {
    }, () => {
      if (this.actionService.action.type === 3) {
        this.displayChildActions = true;
      }
      const category = this.categories.find(c => c.id === this.actionService.action.categoryId);
      const actionIndex = category.actions.findIndex(c => c.id === this.actionService.action.id);
      category.actions[actionIndex] = this.actionService.action;
      this.displayAddUpdateCategory = false;
    });
  }

  onActionDelete() {
    this.actionService.deleteAction(this.actionDeleteId).subscribe(res => {
    }, error => {
    }, () => {
      const category = this.categories.find(c => c.id === this.actionService.action.categoryId);
      const i = category.actions.findIndex(c => c.id === this.actionDeleteId);
      category.actions.splice(i, 1);
      this.displayDeleteButton = false;
    });
  }


  onSubmitChildAction(form: NgForm) {
    if (!this.childActionService.childAction.id) {
      this.postChildAction(form);
    } else {
      this.editChildAction(form);
    }
  }

  postChildAction(form: NgForm) {
    this.childActionService.childAction.actionId = this.actionService.action.id;
    this.childActionService.postChildAction().subscribe(res => {
      this.childActionService.childAction.id = res as string;
    }, () => {
    }, () => {
      this.childAction.push(Object.assign({}, this.childActionService.childAction));
      this.actionService.action.childActions = [] as IChildAction [];
      this.actionService.action.childActions.push(Object.assign({}, this.childActionService.childAction));
      form.resetForm();
    });
  }

  showChildActions(actionId: string, childActionName) {
    this.actionService.action.id = actionId;
    this.childActionName = childActionName;
    this.displayChildActions = true;
    this.childActionService.getAllByActionId(actionId).subscribe(res => {
      this.childAction = res as IChildAction[];
    });
  }

  populateChildActionForm(childActions: IChildAction) {
    this.childActionService.childAction = Object.assign({}, childActions);
  }

  editChildAction(form: NgForm) {
    this.childActionService.updateChildAction().subscribe(res => {
    }, () => {
    }, () => {
      const updateChildActionIndex = this.childAction.findIndex(z => z.id === this.childActionService.childAction.id);
      this.childAction[updateChildActionIndex] = this.childActionService.childAction;
      this.childActionService.childAction = {} as IChildAction;
      form.resetForm();
    });
  }

  onChildActionDelete(childActionId) {
    this.childActionService.deleteChildAction(childActionId).subscribe(res => {
    }, () => {
    }, () => {
      const child = this.childAction.findIndex(x => x.id === childActionId);
      this.childAction.splice(child, 1);
    });
  }

  addDefaultCategories() {
    for (let i = 0; i < this.defaultCategories.length; i++) {
      const startCategory: ICategory = {
        nameAr: this.defaultCategories[i].name,
        nameEn: this.defaultCategories[i].name,
        actions: [],
        groupId: this.groupId,
        isDetected: false,
        type: this.defaultCategories[i].id,
      };
      this.categoryService.category = startCategory;
      this.categoryService.postCategory().subscribe(res => {
        this.categoryService.category.id = res as string;
        startCategory.id = res as string;
        this.categoryService.category.actions = [];
        this.categories.push(startCategory);
      }, err => {
      }, () => {
        this.hasDefault = 1;
      });
    }
  }

}
