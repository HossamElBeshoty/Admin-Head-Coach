import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-actions-page',
  templateUrl: './actions-page.component.html',
  styleUrls: ['./actions-page.component.scss'],
})
export class ActionsPageComponent implements OnInit {
  displayAddingAnAction: boolean = false;
  actionBtns: any[];
  filteredbtns: any[];
  status: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  showAddingAnActionDialog() {
    this.displayAddingAnAction = true;
  }
  filterBtn(event) {
    let query = event.query;
    console.log(query);
  }
  clickEvent() {
    this.status = !this.status;
  }
}
