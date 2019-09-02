import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss'],
})
export class PersonalPageComponent implements OnInit {
  val1: number = 5;
  constructor() { }

  ngOnInit() {
  }

}
