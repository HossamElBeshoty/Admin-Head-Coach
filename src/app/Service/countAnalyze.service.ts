import { Injectable } from '@angular/core';
import { ICountAnalyze } from '../Models/i-CountAnalyze';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class CountAnalyzeService {
  CountAnalyzeList: ICountAnalyze[] = [];
  CountAnalyze = {} as ICountAnalyze;
  constructor(private dataService: DataService) {
  }

  postCountAnalyze() {
    return this.dataService.add('api/CountAnalyze', this.CountAnalyze);
  }

  getAllCountAnalyzes(matchId: string) {
    return this.dataService.get('api/CountAnalyze/' + matchId);
  }

  updateCountAnalyze() {
    return this.dataService.edit('api/CountAnalyze', this.CountAnalyzeList);
  }
}
