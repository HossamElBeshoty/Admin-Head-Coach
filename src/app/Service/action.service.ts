import {Injectable} from '@angular/core';
import {IAction} from '../Models/i-action';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  action = {} as IAction;

  constructor(private dataService: DataService) {
  }

  postAction() {
    return this.dataService.add('api/Action', this.action);
  }

  getActions(categoryId) {
    return this.dataService.get('api/Action/GetByCategoryId/' + categoryId);
  }

  updateAction() {
    return this.dataService.edit('api/Action', this.action);
  }

  deleteAction(id) {
    return this.dataService.delete('api/Action', id);
  }
}
