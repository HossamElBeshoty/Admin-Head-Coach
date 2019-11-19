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
    return this.dataService.add('api/ChildAction', this.childAction);
  }

  getAllByActionId(actionId: string) {
    return this.dataService.get('api/childAction/getAllByActionId/' + actionId);
  }
}
