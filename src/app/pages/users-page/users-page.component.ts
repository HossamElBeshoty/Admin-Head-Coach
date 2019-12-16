import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../../Service/user-account.service';

@Component({
  selector: 'ngx-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  cols: any[];
  colsUserSubscriptions: any[];
  display: boolean = false;
  displayAllUserSubscriptions: boolean = false;
  displayActivationCode: boolean = false;
  allUsers;
  allUserSubscriptions;
  userId;
  userName;
  spinner = false;

  constructor(private  userAccountService: UserAccountService) {
  }

  ngOnInit() {
    this.getUsers();
    this.cols = [
      {field: 'name', header: 'Name'},
      {field: 'creationDate', header: 'Date'},
      {field: 'matchesCount', header: 'MatchesCount'},
      {field: 'email', header: 'Email'},
      {field: 'lockoutEnabled', header: 'Activation'},
    ];
    this.colsUserSubscriptions = [
      {field: 'nameAr', header: 'Name'},
      {field: 'subscriptionsDate', header: 'Date'},
      {field: 'subscription', header: 'Subscription'},
    ];
  }

  getUsers() {
    this.userAccountService.getAllUsers().subscribe(res => {
      this.allUsers = res;
    });
  }

  getUserSubscriptions(id) {
    this.userAccountService.getUserSubscriptions(id).subscribe(res => {
      this.allUserSubscriptions = res;
    }, error => {
    }, () => {
      this.displayAllUserSubscriptions = true;
    });
  }

  showActivationDialog(userId, userName) {
    this.displayActivationCode = true;
    this.userId = userId;
    this.userName = userName;
  }

  sendVerificationCode() {
    this.spinner = true;
    this.userAccountService.getVerificationCode(this.userId).subscribe(res => {
    }, error => {
    }, () => {
      this.displayActivationCode = false;
      this.spinner = false;
    });
  }
}
