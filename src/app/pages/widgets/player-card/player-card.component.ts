import {AfterContentInit, Component, OnInit} from '@angular/core';

declare function playerCard();

@Component({
  selector: 'ngx-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
})
export class PlayerCardComponent implements OnInit, AfterContentInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    playerCard();
  }
}
