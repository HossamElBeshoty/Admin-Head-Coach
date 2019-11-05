import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../Service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginFormModel = {
    userName: '',
    password: '',
  };

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.loginService.loginMember(form).subscribe((result: any) => {
      localStorage.setItem('token', result.token);
      this.router.navigateByUrl('/pages/home');
    }, error => {
      if (error.status === 404) {
        console.log(error);
      }
    });
  }
}
