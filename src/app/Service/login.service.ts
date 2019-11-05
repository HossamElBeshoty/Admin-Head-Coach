import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private dataService: DataService) {
  }

  loginMember(formData) {
    return this.dataService.token(formData);
  }
}
