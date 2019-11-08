import {Injectable} from '@angular/core';
import {IGroup} from '../Models/i-group';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  group = {} as IGroup;

  constructor(private dateService: DataService) {
  }

  getAllGroupPages() {
    return this.dateService.get('api/Group/getAll/');
  }

  postAllGroupPages(group: IGroup) {
    return this.dateService.add('api/Group', group);
  }
}
