import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../../Service/user-account.service';
import {ActivatedRoute} from '@angular/router';
import {IUserAccount} from '../../Models/i-user-account';
import {environment} from '../../../environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'ngx-user-pofile',
  templateUrl: './user-pofile.component.html',
  styleUrls: ['./user-pofile.component.scss'],
})
export class UserPofileComponent implements OnInit {
  userId: string;
  userData: IUserAccount;
  apiEndPoint = environment.apiEndPoint;
  displayUserAccountProfile: boolean = false;
  displayUserAccountProfileImage: boolean = false;
  isUser: boolean;

  constructor(public userAccountService: UserAccountService,
              private activatedRouter: ActivatedRoute,
              private cookieService: CookieService) {
  }

  ngOnInit() {
    this.userId = this.activatedRouter.snapshot.params.id;
    this.checkUser();
    this.getUser();
  }

  getUser() {
    this.userAccountService.getUserById(this.userId).subscribe(res => {
      this.userData = res as IUserAccount;
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
