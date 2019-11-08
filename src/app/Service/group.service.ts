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

  postAllGroupPages() {
    return this.dateService.add('api/Group', this.group);
  }

  putAllGroupPages() {
    return this.dateService.edit('api/Group/', this.group);
  }

  deleteGroupPage(id) {
    return this.dateService.delete('api/Group/', id);
  }
}
