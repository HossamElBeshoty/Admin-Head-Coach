import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NbAuthComponent} from '@nebular/auth';
import {LoginPageComponent} from './Page/login-page/login-page.component';
import {RegistrationPageComponent} from './Page/registration-page/registration-page.component';
import {VerificationCodePageComponent} from './Page/verification-code-page/verification-code-page.component';
import {ForgetPasswordComponent} from './Page/forget-password/forget-password.component';

// @ts-ignore
const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('../app/pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: LoginPageComponent,
      },
      {
        path: 'forgetPassword',
        component: ForgetPasswordComponent,
      },
      {
        path: 'register',
        component: RegistrationPageComponent,
      },
      {
        path: 'verificationCode/:id',
        component: VerificationCodePageComponent,
      },
      // {
      //   path: 'logout',
      //   component: NbLogoutComponent,
      // },
      // {
      //   path: 'request-password',
      //   component: NbRequestPasswordComponent,
      // },
      // {
      //   path: 'reset-password',
      //   component: NbResetPasswordComponent,
      // },
    ],
  },
  {path: '', redirectTo: 'pages', pathMatch: 'full'},
  {path: '**', redirectTo: 'pages'},
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
