import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../Service/group.service';
import {NgForm} from '@angular/forms';
import {IGroup} from '../../Models/i-group';
import {CategoryService} from '../../Service/category.service';
import {ICategory} from '../../Models/i-category';

@Component({
  selector: 'ngx-actions-page',
  templateUrl: './actions-page.component.html',
  styleUrls: ['./actions-page.component.scss'],
})
export class ActionsPageComponent implements OnInit {
  status: boolean = false;
  allPages: IGroup[] = [];
  displayAddNewPage: boolean = false;
  displayDeletePage: boolean = false;
  deleteId;
  categories: ICategory[] = [];
  tabIndex = 0;

  constructor(public groupService: GroupService, public categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllPages();
    this.resetForm();
  }

  onChangeTab(index) {
    this.tabIndex = index;
    this.getPageCategory(this.allPages[this.tabIndex].id);
  }

  getPageCategory(id) {
    this.categoryService.getCategories(id).subscribe(res => {
      this.categories = res as ICategory[];
    });
  }

  showAddNewPageDialog() {
    this.displayAddNewPage = true;
    this.groupService.group = {} as IGroup;
  }

  showDeletePageDialog(group: IGroup) {
    this.deleteId = group.id;
    this.displayDeletePage = true;
  }

  getAllPages() {
    this.groupService.getAllGroupPages().subscribe(res => {
      this.allPages = res as IGroup[];
      this.getPageCategory(this.allPages[0].id);
    }, () => {
    }, () => {
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.groupService.group = {
      id: null,
      nameAr: '',
      nameEn: '',
    };
    this.displayAddNewPage = false;
  }

  populateForm(group: IGroup) {
    this.displayAddNewPage = true;
    this.groupService.group = Object.assign({}, group);
  }

  onSubmit() {
    if (!this.groupService.group.id) {
      this.postNewPage();
    } else {
      this.updateNewPage();
    }
  }

  private postNewPage() {
    this.groupService.postAllGroupPages().subscribe(res => {
      this.groupService.group.id = res as string;
    }, error => {
    }, () => {
      this.allPages.push(this.groupService.group);
      this.displayAddNewPage = false;
    });
  }

  private updateNewPage() {
    this.groupService.putAllGroupPages().subscribe(res => {
    }, error => {
    }, () => {
      const index = this.allPages.findIndex(c => c.id === this.groupService.group.id);
      this.allPages[index] = this.groupService.group;
      this.displayAddNewPage = false;
    });
  }

  onDelete() {
    this.groupService.deleteGroupPage(this.deleteId).subscribe(res => {
    }, () => {
    }, () => {
      const index = this.allPages.findIndex(c => c.id === this.deleteId);
      this.allPages.splice(index, 1);
      this.onChangeTab(0);
      this.displayDeletePage = false;
    });
  }
}
