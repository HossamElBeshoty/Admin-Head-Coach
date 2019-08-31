import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'ngx-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0,
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
})
export class UsersPageComponent implements OnInit {
  cols: any[];
  display: boolean = false;
  allUsers = [{
    id: 1,
    name: 'Amr Mossad',
    sport: 'Basket Ball',
    cerationDate: '12/4/2017',
    club: 'Zamalik Sports Club',
  }, {
    id: 2,
    name: 'Ahmed Mossad',
    sport: 'Tinnes',
    cerationDate: '12/4/2017',
    club: 'Ahly Sports Club',
  }, {
    id: 3,
    name: 'Hossam Hamed',
    sport: 'Basket Ball',
    cerationDate: '12/4/2017',
    club: 'Zamalik Sports Club',
  }, {
    id: 4,
    name: 'Hazem Hammed',
    sport: 'Hand Ball',
    cerationDate: '12/4/2017',
    club: 'Zamalik Sports Club',
  }];
  // selectedUser: this.allUsers;
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'sport', header: 'Sport' },
      { field: 'cerationDate', header: 'Ceration Date' },
      { field: 'club', header: 'Club' },
    ];
  }

}
