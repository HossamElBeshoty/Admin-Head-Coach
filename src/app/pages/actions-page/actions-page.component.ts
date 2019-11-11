import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../Service/group.service';
import {NgForm} from '@angular/forms';
import {IGroup} from '../../Models/i-group';

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

  constructor(public groupService: GroupService) {
  }

  ngOnInit() {
    this.getAllPages();
    this.resetForm();
  }

  showAddNewPageDialog() {
    this.displayAddNewPage = true;
    this.groupService.group = {} as IGroup;
  }

  showDeletePageDialog(id) {
    this.deleteId = id;
    this.displayDeletePage = true;
  }

  getAllPages() {
    this.groupService.getAllGroupPages().subscribe(res => {
      this.allPages = res as IGroup[];
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
      this.displayDeletePage = false;
    });
  }
}
