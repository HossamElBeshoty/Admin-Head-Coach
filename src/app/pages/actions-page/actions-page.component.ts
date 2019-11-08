import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../Service/group.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-actions-page',
  templateUrl: './actions-page.component.html',
  styleUrls: ['./actions-page.component.scss'],
})
export class ActionsPageComponent implements OnInit {
  status: boolean = false;
  allPages;
  displayAddNewPage: boolean = false;

  constructor(private groupService: GroupService) {
  }

  ngOnInit() {
    this.getAllPages();
    this.resetForm();
  }

  showAddNewPageDialog() {
    this.displayAddNewPage = true;
  }

  getAllPages() {
    this.groupService.getAllGroupPages().subscribe(res => {
      this.allPages = res;
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

  onSubmit(form: NgForm) {
    this.groupService.postAllGroupPages(form.value).subscribe(res => {
      this.resetForm(form);
    }, error => {
      // console.log(error);
    });
  }
}
