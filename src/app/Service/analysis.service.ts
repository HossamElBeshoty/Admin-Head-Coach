import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AnalysisService {

  constructor(private dataService: DataService) {
  }

  getVideoAnalysis(videoId: string, lang: string) {
    return this.dataService.get(`api/Analyze/GetByVideo/${videoId}/${lang}`);
  }
}
