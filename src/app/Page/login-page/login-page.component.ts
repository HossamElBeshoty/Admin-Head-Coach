import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../Service/login.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'ngx-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginFormModel = {
    username: '',
    password: '',
  };
  errorMessage: string;
  spinner = false;
  userId;

  constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.userId = this.cookieService.get('userId');
  }

  onLogin() {
    this.spinner = true;
    const loginObj = 'grant_type=password' + '&username='
      + this.loginFormModel.username + '&password=' + this.loginFormModel.password;
    this.loginService.loginMember(loginObj).subscribe((result: any) => {
      this.cookieService.set('access_token', result.access_token);
      this.cookieService.set('userName', result.userName);
      this.cookieService.set('userId', result.userId);
      this.cookieService.set('isAllow', result.isAllow);
      this.router.navigateByUrl('/pages/home');
    }, error => {
      this.spinner = false;
      if (error.status === 400) {
        if (error.error.error === 'User UnActive') {
          localStorage.setItem('userName', this.loginFormModel.username);
          localStorage.setItem('password', this.loginFormModel.password);
          this.router.navigateByUrl('verificationCode/' + error.error.error_description);
        } else {
          this.errorMessage = 'User Name Or Password Are Not Correct';
        }
      }
    });
  }
}
