import {Component, OnInit} from '@angular/core';
import {TeamService} from '../../../Service/team.service';
import {ActivatedRoute} from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'ngx-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss'],
})
export class TeamDetailsComponent implements OnInit {
  teamID: string;
  cols: any[];
  players = [
    {
      no: 1,
      name: 'Amr',
      mp: 6,
      goals: '0',
      shots: 3,
      pr: 24,
      sevenMeters: '7/3',
      yc: '0',
      rc: '2',
      twoMin: '2 ',
      tp: 123,
    },
    {
      no: 2,
      name: 'Hazem',
      mp: 6,
      goals: '0',
      shots: 3,
      pr: 24,
      sevenMeters: '7/3',
      yc: '0',
      rc: '2',
      twoMin: '2 ',
      tp: 123,
    },
  ];

  columns: any[];

  constructor(private teamService: TeamService, private route: ActivatedRoute) {
    this.teamID = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.cols = [
      {field: 'no', header: 'Number'},
      {field: 'name', header: 'Name'},
      {field: 'mp', header: 'MP'},
      {field: 'goals', header: 'Goals'},
      {field: 'shots', header: 'Shots'},
      {field: 'pr', header: '%'},
      {field: 'sevenMeters', header: '7M'},
      {field: 'yc', header: 'YC'},
      {field: 'rc', header: 'RC'},
      {field: 'twoMin', header: '2M'},
      {field: 'tp', header: 'TP'},
    ];
  }

  exportPdf() {
    import('jspdf').then((jspdf: any) => {
      import('jspdf-autotable').then(x => {
        const doc = new jspdf.default(0, 0);
        doc.autoTable(this.cols, this.players);
        doc.save('Upstricke.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.getPlayers());
      const workbook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
      const excelBuffer: any = xlsx.write(workbook, {bookType: 'xlsx', type: 'array'});
      this.saveAsExcelFile(excelBuffer, 'Upstricke');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then(FileSaver => {
      const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }

  getPlayers() {
    return this.players;
  }

}
