import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'ngx-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss'],
})
export class TeamsPageComponent implements OnInit {
  // cols: any[];
  // display = false;
  // allTeams = [{
  //   id: 1,
  //   club: 'Zamalik Sports Club',
  //   player: 'Amr Mossad',
  //   position: 'Back Left',
  //   team: 'Under 16',
  // }, {
  //   id: 2,
  //   club: 'Zamalik Sports Club',
  //   player: 'Hazzem Hamed',
  //   position: 'Back Left',
  //   team: 'Under 16',
  // }, {
  //   id: 3,
  //   club: 'Zamalik Sports Club',
  //   player: 'Hossam Hamed',
  //   position: 'Back Left',
  //   team: 'Under 16',
  // }, {
  //   id: 4,
  //   club: 'Ahly Sports Club',
  //   player: 'Ahmed Mossad',
  //   position: 'Back Left',
  //   team: 'Under 16',
  // }, {
  //   id: 5,
  //   club: 'Ahly Sports Club',
  //   player: 'Hossam El Beshoty',
  //   position: 'Back Left',
  //   team: 'Under 16',
  // }];

  // rowGroupMetadata: any;
  clubs: TreeNode[];
  cols: any[];
  constructor() { }

  ngOnInit() {

    // this.cols = [
    //   { field: 'club', header: 'Club' },
    //   { field: 'player', header: 'Player' },
    //   { field: 'position', header: 'Position' },
    //   { field: 'team', header: 'Team' },
    // ];
    // this.updateRowGroupMetaData();
    this.cols = [
      { field: 'clubName', header: 'Club Name' },
      { field: 'teamName', header: 'Club Name' },
      { field: 'player', header: 'Player' },
      { field: 'position', header: 'Position' },
    ];
    this.clubs = [
      {
        'data': {
          'clubName': 'El Zamalik Sports Club',
        },
        'children': [
          {
            'data': {
              'teamName': 'Under 16 Years Old',
            }, 'children': [
              {
                'data': {
                  'player': 'Amr Mossad',
                  'position': 'BL',
                },
              },
              {
                'data': {
                  'player': 'Ahmed Mossad',
                  'position': 'BR',
                },
              },
            ],
          },
          {
            'data': {
              'teamName': 'Under 18 Years Old',
            }, 'children': [
              {
                'data': {
                  'player': 'Hazem Hamed',
                  'position': 'BL',
                },
              },
            ],
          },
        ],
      },
      {
        'data': {
          'clubName': 'El Ahly Sports Club',
        },
        'children': [
          {
            'data': {
              'teamName': 'Under 16 Years Old',
            }, 'children': [
              {
                'data': {
                  'player': 'Amr Mossad',
                  'position': 'BL',
                },
              },
              {
                'data': {
                  'player': 'Ahmed Mossad',
                  'position': 'BR',
                },
              },
            ],
          },
          {
            'data': {
              'teamName': 'Under 18 Years Old',
            }, 'children': [
              {
                'data': {
                  'player': 'Hazem Hamed',
                  'position': 'BL',
                },
              },
            ],
          },
        ],
      },
    ];
  }
  // updateRowGroupMetaData() {
  //   this.rowGroupMetadata = {};
  //   if (this.allTeams) {
  //     for (let i = 0; i < this.allTeams.length; i++) {
  //       const rowData = this.allTeams[i];
  //       const brand = rowData.club;
  //       if (i === 0) {
  //         this.rowGroupMetadata[brand] = { index: 0, size: 1 };
  //       }
  //       // tslint:disable-next-line:one-line
  //       else {
  //         const previousRowData = this.allTeams[i - 1];
  //         const previousRowGroup = previousRowData.club;
  //         if (brand === previousRowGroup)
  //           this.rowGroupMetadata[brand].size++;
  //         else
  //           this.rowGroupMetadata[brand] = { index: i, size: 1 };
  //       }
  //     }
  //   }
  // }
}
