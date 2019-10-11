import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'ngx-analysis-match-page',
  templateUrl: './analysis-match-page.component.html',
  styleUrls: ['./analysis-match-page.component.scss'],
})
export class AnalysisMatchPageComponent implements OnInit {
  cars = [{
    name: 'FastBreak (15)',
    position: '33 min 12 Sec',
    duration: '6 Sec',
    standerdSet: '',
    possession: 'Team A',
    gameSet: 'Shot',
    crossDiscription: 'Back To Back',
    shotOutCome: 'Goal',
    goalPosition: 'Right Down',
    player: ' Hazem Hammed',
    penalty: '',
    score: '1:0',
  }];
  cols: any[];
  itemsPlayerA: MenuItem[];
  itemsPlayerB: MenuItem[];
  itemsActions: MenuItem[];
  itemsActionsTactic: MenuItem[];
  displayPlayersADialog = false;
  displayPlayersADeleteDialog = false;
  displayConfirmPlayersADeleteDialog = false;
  displayPlayersBDialog = false;
  displayPlayersBDeleteDialog = false;
  displayActionsDialog = false;
  displayActionTacticsDialog = false;
  tactics = [
    {id: 1, name: 'Shot'},
    {id: 2, name: 'Cross'},
    {id: 3, name: 'Tackie'},
    {id: 4, name: 'Foul'},
    {id: 5, name: 'Pass'},
  ];
  teamADeleteTable = [
    {playerName: 'Ferjani Sassi', position: 'Midfielder'},
    {playerName: 'Shikabala ', position: 'Midfielder'},
    {playerName: 'Mahmoud Abdel Rahim ', position: 'Goalkeeper'},
    {playerName: 'Tarek Hamed', position: 'Midfielder'},
  ];
  colsTactic: any[];
  selectedTactic;
  id = 'Du3fYule9-k';
  playerVars = {
    cc_lang_pref: 'en',
  };
  private player;
  public ytEvent;

  constructor() {
  }

  ngOnInit() {
    this.cols = [
      {field: 'name', header: 'Name', width: '20%'},
      {field: 'position', header: 'Position', width: '20%'},
      {field: 'duration', header: 'Duration', width: '20%'},
      {field: 'standerdSet', header: 'Stand. Set', width: '20%'},
      {field: 'possession', header: 'Poss.', width: '20%'},
      {field: 'gameSet', header: 'Game Set', width: '20%'},
      {field: 'crossDiscription', header: 'Cross Dis.', width: '20%'},
      {field: 'shotOutCome', header: 'Shot Out.', width: '20%'},
      {field: 'goalPosition', header: 'Goal Pos.', width: '20%'},
      {field: 'player', header: 'Player', width: '20%'},
      {field: 'penalty', header: 'Penalty', width: '20%'},
      {field: 'score', header: 'Score', width: '15%'},
    ];
    this.colsTactic = [
      {field: 'name', header: 'Name'},
    ];
    this.itemsPlayerA = [
      {
        label: 'Update Player', icon: 'pi pi-refresh', command: () => {
          this.updatePlayerA();
        },
      },
      {
        label: 'Delete Player', icon: 'pi pi-times', command: () => {
          this.deletePlayerA();
        },
      },
    ];
    this.itemsPlayerB = [
      {
        label: 'Update Player', icon: 'pi pi-refresh', command: () => {
          this.updatePlayerB();
        },
      },
      {
        label: 'Delete Player', icon: 'pi pi-times', command: () => {
          this.deletePlayerB();
        },
      },
    ];
    this.itemsActions = [
      {
        label: 'Add Action', icon: 'pi pi-plus', command: () => {
          this.addAction();
        },
      },
      {
        label: 'Update Action', icon: 'pi pi-refresh', command: () => {
          this.updateAction();
        },
      },
      {
        label: 'Delete Action', icon: 'pi pi-times', command: () => {
          this.deleteAction();
        },
      },
    ];
    this.itemsActionsTactic = [
      {
        label: 'Add Tactic', icon: 'pi pi-plus', command: () => {
          this.addTactic();
        },
      },
      {
        label: 'Update Tactic', icon: 'pi pi-refresh', command: () => {
          this.updateTactic();
        },
      },
      {
        label: 'Delete Tactic', icon: 'pi pi-times', command: () => {
          this.deleteTactic();
        },
      },
    ];
  }

  updatePlayerA() {
    this.displayPlayersADialog = true;
  }

  deletePlayerA() {
    this.displayPlayersADeleteDialog = true;
  }

  confirmDeletePlayerA() {
    this.displayConfirmPlayersADeleteDialog = true;
  }

  updatePlayerB() {
    this.displayPlayersBDialog = true;
  }

  deletePlayerB() {
    this.displayPlayersBDeleteDialog = true;
  }

  addAction() {
    this.displayActionsDialog = true;
  }

  updateAction() {
    this.displayActionsDialog = true;
  }

  deleteAction() {
    // tslint:disable-next-line:no-console
    console.log('Delete Works');
  }

  addTactic() {
    this.displayActionTacticsDialog = true;
  }

  updateTactic() {
    this.displayActionTacticsDialog = true;
  }

  deleteTactic() {
    // tslint:disable-next-line:no-console
    console.log('Delete Works');
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }

  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  setSlowMotion() {
    this.player.setPlaybackRate(.25);
  }

  getCurrentTimeFromYoutubeVideo() {
    this.player.getCurrentTime();
  }
}
