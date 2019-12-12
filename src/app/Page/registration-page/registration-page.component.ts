import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../../Service/user-account.service';

@Component({
  selector: 'ngx-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {

  constructor(public userAccountService: UserAccountService) {
  }

  ngOnInit() {
  }

}
