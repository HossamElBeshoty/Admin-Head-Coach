import {Injectable} from '@angular/core';
import {IChildAction} from '../Models/i-child-action';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ChildActionService {
  childAction = {} as IChildAction;

  constructor(private dataService: DataService) {
  }

  postChildAction() {
    return this.dataService.add('api/childAction', this.childAction);
  }

  getAllByActionId(actionId: string) {
    return this.dataService.get('api/childAction/getAllByActionId/' + actionId);
  }

  updateChildAction() {
    return this.dataService.edit('api/childAction', this.childAction);
  }

  deleteChildAction(id) {
    return this.dataService.delete('api/ChildAction/', id);
  }
}
