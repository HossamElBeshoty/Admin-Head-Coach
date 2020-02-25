import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../../Service/user-account.service';
import {ISubscription} from '../../Models/i-subscription';
import {SubscriptionService} from '../../Service/subscription.service';

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
  displayResetPassword: boolean = false;
  allUsers;
  allUserSubscriptions;
  userId;
  userName;
  spinner = false;
  allSubscriptions: ISubscription[] = [];

  constructor(public userAccountService: UserAccountService, public subscriptionService: SubscriptionService) {
  }

  ngOnInit() {
    this.getUsers();
    this.getAllSubscriptions();
    this.cols = [
      {field: 'name', header: 'Name'},
      {field: 'creationDate', header: 'Date'},
      {field: 'matchesCount', header: 'MatchesCount'},
      {field: 'email', header: 'Email'},
      {field: 'lockoutEnabled', header: 'Activation'},
    ];
    this.colsUserSubscriptions = [
      {field: 'subscriptionsDate', header: 'Date'},
      {field: 'subscription', header: 'Subscription', subfield: 'nameAr', subfieldName: 'subscription.nameAr'},
    ];
  }

  getUsers() {
    this.userAccountService.getAllUsers().subscribe(res => {
      this.allUsers = res;
    });
  }

  getUserSubscriptions(id) {
    this.userId = id;
    this.userAccountService.getUserSubscriptions(this.userId).subscribe(res => {
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

  showResetPasswordDialog(userId) {
    this.displayResetPassword = true;
    this.userId = userId;
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

  getAllSubscriptions() {
    this.subscriptionService.getAllSubscriptions().subscribe(res => {
      this.allSubscriptions = res as ISubscription[];
    });
  }

  addSubscriptionToUser() {
    this.userAccountService.userSubscription.userId = this.userId;
    this.userAccountService.addUserSubscription().subscribe(res => {
    }, error => {
    }, () => {
      this.getUserSubscriptions(this.userId);
    });
  }

  resetPassword() {
    this.spinner = true;
    this.userAccountService.resetPassword(this.userId).subscribe(res => {
    }, error => {
    }, () => {
      this.displayResetPassword = false;
      this.spinner = false;
    });
  }
}
