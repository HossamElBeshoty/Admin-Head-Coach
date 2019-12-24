import {Component} from '@angular/core';

import {MENU_ITEMS} from './pages-menu';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
      <ngx-one-column-layout>
          <nb-menu [items]="getMenu()"></nb-menu>
          <router-outlet></router-outlet>
      </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  isAllow;
  menu = [];

  getMenu() {
    return this.menuVisibility(MENU_ITEMS, 'Users', this.isAdmin());
  }

  menuVisibility(menu, title, visible) {
    let newMenu = menu;
    const index = menu.findIndex(v => v.title === title);
    const menu_filter = menu.filter(v => v.title === title);
    if ((menu_filter.length > 0) && (index >= 0)) {
      menu_filter[0].hidden = !visible;
      newMenu = [
        ...menu.slice(0, index),
        menu_filter[0],
        ...menu.slice(index + 1),
      ];
    }
    return newMenu;
  }

  isAdmin() {
    // your code goes here
    this.isAllow = localStorage.getItem('isAllow').toLowerCase() === 'true';
    return !!this.isAllow;
  }

}
