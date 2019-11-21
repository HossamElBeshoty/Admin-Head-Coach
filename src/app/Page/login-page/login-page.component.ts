import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Service/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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

  constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) {
  }

  ngOnInit() {
  }

  onLogin() {
    const loginObj = 'grant_type=password' + '&username='
      + this.loginFormModel.username + '&password=' + this.loginFormModel.password;

    this.loginService.loginMember(loginObj).subscribe((result: any) => {
      this.cookieService.set('access_token', result.access_token);
      this.cookieService.set('userName', result.userName);
      this.router.navigateByUrl('/pages/home');
    }, error => {
      if (error.status === 400) {
        this.errorMessage = 'User Name Or Password Are Not Correct';
      }
    });
  }
}
