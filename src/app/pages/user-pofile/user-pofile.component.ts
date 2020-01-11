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
  inCorrectPassword: string;
  userData: IUserAccount = {} as IUserAccount;
  apiEndPoint = environment.apiEndPoint;
  displayUserAccountProfile: boolean = false;
  displayUserAccountProfileImage: boolean = false;
  isUser: boolean;
  subscription: ISubscription = {} as ISubscription;
  show_button: Boolean = false;
  show_eye: Boolean = false;
  show_button2: Boolean = false;
  show_eye2: Boolean = false;
  show_button3: Boolean = false;
  show_eye3: Boolean = false;

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

  showPassword() {
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }

  showPassword2() {
    this.show_button2 = !this.show_button2;
    this.show_eye2 = !this.show_eye2;
  }

  showPassword3() {
    this.show_button3 = !this.show_button3;
    this.show_eye3 = !this.show_eye3;
  }

  onChangePassword() {
    this.userAccountService.changeUserPassword().subscribe(res => {
    }, error => {
      if (error.error.modelState.errors[0]) {
        this.inCorrectPassword = error.error.modelState.errors[0];
      }
    }, () => {
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
    if (this.userAccountService.userAccount.profilePath) {
      if (this.userAccountService.userAccount.profilePath.includes('assets')) {
        this.userAccountService.userAccount.profilePath = null;
      }
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
