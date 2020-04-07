import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss'],
})
export class ReportsPageComponent implements OnInit {
  index: number = -1;
  cumulativeTeamStatistics: any[];
  collapsed = false;
  cols: any[];

  displayNewReportDialog: boolean = false;
  reports = [
    {report: 'asd', teamA: 'Zamalik', teamB: 'Ahly'},
  ];


  constructor() {
  }

  ngOnInit() {
    // this.cumulativeTeamStatistics = [
    //   {
    //     playerName: 'Amr M.',
    //     mp: '7',
    //     totalGaals: '0',
    //     totalShots: '0',
    //     totalPersentage: '0',
    //     goalShotsSevenMetersPenaltyShots: '0/0',
    //     goalShotsSevenMetersPenaltyShotsPersentage: '0',
    //     goalShotsSixMetersPenaltyShots: '0/0',
    //     goalShotsInFlightShots: '0/0',
    //     goalShotsNineMetersPenaltyShots: '0/0',
    //     goalShotsWingShots: '0/0',
    //     goalShotsBreakthroughsShots: '0/0',
    //     goalShotsExclusionsShots: '0/0',
    //     goalShotsFastBreaksShots: '0/0',
    //     punishmentYellowCard: '0',
    //     punishmentRedCard: '0',
    //     punishmentTwoMinuteSuspensions: '0',
    //     punishmentTwoAndTwoMinuteSuspensions: '0',
    //     punishmentExclusions: '0',
    //     offenceAssists: '4',
    //     offenceReceivedSevenMetersFouls: '0',
    //     offenceBlockedShots: '0',
    //     offenceTurnover: '0',
    //     defenceSteals: '0',
    //     defenceDefenceBlocks: '0',
    //     defenceAttackInterruptions: '0',
    //     tP: '107:52',
    //     allGotalGoals: '100',
    //   },
    //   {
    //     playerName: 'Ahmed M.',
    //     mp: '7',
    //     totalGaals: '0',
    //     totalShots: '0',
    //     totalPersentage: '0',
    //     goalShotsSevenMetersPenaltyShots: '0/0',
    //     goalShotsSevenMetersPenaltyShotsPersentage: '0',
    //     goalShotsSixMetersPenaltyShots: '0/0',
    //     goalShotsInFlightShots: '0/0',
    //     goalShotsNineMetersPenaltyShots: '0/0',
    //     goalShotsWingShots: '0/0',
    //     goalShotsBreakthroughsShots: '0/0',
    //     goalShotsExclusionsShots: '0/0',
    //     goalShotsFastBreaksShots: '0/0',
    //     punishmentYellowCard: '0',
    //     punishmentRedCard: '0',
    //     punishmentTwoMinuteSuspensions: '0',
    //     punishmentTwoAndTwoMinuteSuspensions: '0',
    //     punishmentExclusions: '0',
    //     offenceAssists: '4',
    //     offenceReceivedSevenMetersFouls: '0',
    //     offenceBlockedShots: '0',
    //     offenceTurnover: '0',
    //     defenceSteals: '0',
    //     defenceDefenceBlocks: '0',
    //     defenceAttackInterruptions: '0',
    //     tP: '107:52',
    //   },
    //
    //   {
    //     playerName: 'Ahmed Ahmer',
    //     mp: '7',
    //     totalGaals: '0',
    //     totalShots: '0',
    //     totalPersentage: '0',
    //     goalShotsSevenMetersPenaltyShots: '0/0',
    //     goalShotsSevenMetersPenaltyShotsPersentage: '0',
    //     goalShotsSixMetersPenaltyShots: '0/0',
    //     goalShotsInFlightShots: '0/0',
    //     goalShotsNineMetersPenaltyShots: '0/0',
    //     goalShotsWingShots: '0/0',
    //     goalShotsBreakthroughsShots: '0/0',
    //     goalShotsExclusionsShots: '0/0',
    //     goalShotsFastBreaksShots: '0/0',
    //     punishmentYellowCard: '0',
    //     punishmentRedCard: '0',
    //     punishmentTwoMinuteSuspensions: '0',
    //     punishmentTwoAndTwoMinuteSuspensions: '0',
    //     punishmentExclusions: '0',
    //     offenceAssists: '4',
    //     offenceReceivedSevenMetersFouls: '0',
    //     offenceBlockedShots: '0',
    //     offenceTurnover: '0',
    //     defenceSteals: '0',
    //     defenceDefenceBlocks: '0',
    //     defenceAttackInterruptions: '0',
    //     tP: '107:52',
    //   },
    // ];
    this.cols = [
      {field: 'report', header: 'Report'},
      {field: 'teamA', header: 'Team A'},
      {field: 'teamB', header: 'Team B'},
    ];
  }

  openNext() {
    this.index = (this.index === 3) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index <= 0) ? 3 : this.index - 1;
  }

  showAddReportDialog() {
    this.displayNewReportDialog = true;
  }
}
