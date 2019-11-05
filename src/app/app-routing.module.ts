import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {LoginPageComponent} from './Page/login-page/login-page.component';
import {RegistrationPageComponent} from './Page/registration-page/registration-page.component';

const routes: Routes = [
  // {
  //   path: 'login', component: LoginPageComponent,
  // },
  {
    path: 'pages',
    loadChildren: () => import('app/pages/pages.module')
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
      // {
      //   path: 'login',
      //   component: NbLoginComponent,
      // },
      {
        path: 'register',
        component: RegistrationPageComponent,
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
