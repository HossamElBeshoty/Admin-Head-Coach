import {Component, OnInit} from '@angular/core';
import {UserAccountService} from '../../Service/user-account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../Service/login.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'ngx-verification-code-page',
  templateUrl: './verification-code-page.component.html',
  styleUrls: ['./verification-code-page.component.scss'],
})
export class VerificationCodePageComponent implements OnInit {
  verifyCode = '';
  userId: string;
  spinner = false;
  errorMessage;

  constructor(public userAccountService: UserAccountService,
              private activatedRouter: ActivatedRoute,
              private loginService: LoginService,
              private cookieService: CookieService,
              private router: Router) {
  }

  ngOnInit() {
    this.userId = this.activatedRouter.snapshot.params.id;
  }

  checkVerificationCode() {
    this.spinner = true;
    this.userAccountService.checkVerificationCode(this.verifyCode, this.userId).subscribe(res => {
      const verified = res as boolean;
      if (verified === true) {
        const loginObj = 'grant_type=password' + '&username='
          + localStorage.getItem('userName') + '&password=' + localStorage.getItem('password');
        this.loginService.loginMember(loginObj).subscribe((result: any) => {
          this.cookieService.set('access_token', result.access_token);
          this.cookieService.set('userName', result.userName);
          this.cookieService.set('userId', result.userId);
          this.router.navigateByUrl('/pages/home');
        }, error => {
        }, () => {
          this.spinner = false;
          localStorage.clear();
        });
      } else {
        this.spinner = false;
        this.errorMessage = 'InValid Validation Code';
      }
    });
  }
}
