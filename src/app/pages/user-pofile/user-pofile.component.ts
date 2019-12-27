import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../../Service/user-account.service';
import {ActivatedRoute} from '@angular/router';
import {IUserAccount} from '../../Models/i-user-account';
import {environment} from '../../../environments/environment';
import {CookieService} from 'ngx-cookie-service';
import {ISubscription} from '../../Models/i-subscription';

@Component({
  selector: 'ngx-user-pofile',
  templateUrl: './user-pofile.component.html',
  styleUrls: ['./user-pofile.component.scss'],
})
export class UserPofileComponent implements OnInit {
  userId: string;
  userData: IUserAccount = {} as IUserAccount;
  apiEndPoint = environment.apiEndPoint;
  displayUserAccountProfile: boolean = false;
  displayUserAccountProfileImage: boolean = false;
  isUser: boolean;
  subscription: ISubscription= {} as ISubscription;
  constructor(public userAccountService: UserAccountService,
              private activatedRouter: ActivatedRoute,
              private cookieService: CookieService) {
  }

  ngOnInit() {
    this.userId = this.activatedRouter.snapshot.params.id;


    // this.userData.userSubscriptions[0].subscription = [];
    this.checkUser();
    this.getUser();
  }

  getUser() {
    this.userAccountService.getUserById(this.userId).subscribe(res => {
      this.userData = res as IUserAccount;
      this.subscription = this.userData.userSubscriptions[0].subscription;

    });
  }

  showUserAccountImageDialog() {
    this.displayUserAccountProfileImage = true;
  }

  showUserAccountDialog(userAccount: IUserAccount) {
    this.userAccountService.userAccount = Object.assign({}, userAccount);
    this.displayUserAccountProfile = true;
  }

  displayImg(event: any) {
    this.userAccountService.userAccount.profilePath = event;
  }

  updateUser() {
    const img = this.userAccountService.userAccount.profilePath;
    if (this.userAccountService.userAccount.profilePath.includes('assets')) {
      this.userAccountService.userAccount.profilePath = null;
    }
    this.userAccountService.editUser().subscribe(res => {
    }, error => {
    }, () => {
      this.displayUserAccountProfile = false;
      this.userAccountService.userAccount.profilePath = img;
      this.userData = this.userAccountService.userAccount;
    });
  }

  checkUser() {
    this.isUser = this.cookieService.get('userId') === this.userId;
  }
}
