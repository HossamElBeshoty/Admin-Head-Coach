import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../../Service/user-account.service';
import {Router} from '@angular/router';
import {SubscriptionService} from '../../Service/subscription.service';
import {ISubscription} from '../../Models/i-subscription';

@Component({
  selector: 'ngx-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  spinner = false;
  displayRegistration: boolean = false;
  allSubscriptions: ISubscription[];
  matchCount = 0;

  constructor(public userAccountService: UserAccountService,
              private router: Router,
              public subscriptionService: SubscriptionService) {
  }

  ngOnInit() {
    this.getAllSubscriptions();
  }

  onUserRegistration() {
    this.userAccountService.registerUserInfo(this.matchCount).subscribe(res => {
      this.spinner = true;
    }, error => {
    }, () => {
      this.router.navigateByUrl('');
    });
  }

  getAllSubscriptions() {
    this.subscriptionService.getAllSubscriptions().subscribe(res => {
      this.allSubscriptions = res as ISubscription[];
    });
  }

  getSelectedSubscription(event) {
    this.matchCount = event.target.options[event.target.selectedIndex].getAttribute('data-matchesCount');
  }
}
