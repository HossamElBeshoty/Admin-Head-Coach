import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../../Service/user-account.service';

@Component({
  selector: 'ngx-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  spinner = false;
  displayRegistration: boolean = false;

  constructor(public userAccountService: UserAccountService) {
  }

  ngOnInit() {
  }

  onUserRegistration() {
    this.userAccountService.registerUserInfo().subscribe(res => {
      this.spinner = true;
    }, error => {
      // console.log('err');
    }, () => {
      this.displayRegistration = true;
    });
  }
}
