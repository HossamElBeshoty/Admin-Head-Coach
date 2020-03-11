import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './@core/core.module';
import {ThemeModule} from './@theme/theme.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPageComponent} from './Page/login-page/login-page.component';
import {RegistrationPageComponent} from './Page/registration-page/registration-page.component';
import {httpInterceptorProviders} from './Interceptor';
import {CookieService} from 'ngx-cookie-service';
import {LyThemeModule, LY_THEME} from '@alyle/ui';
import {MinimaLight} from '@alyle/ui/themes/minima';
import {LyButtonModule} from '@alyle/ui/button';
import {LyToolbarModule} from '@alyle/ui/toolbar';
import {LyResizingCroppingImageModule} from '@alyle/ui/resizing-cropping-images';
import {PrimengModule} from './pages/primeng.module';
import {VerificationCodePageComponent} from './Page/verification-code-page/verification-code-page.component';
import {ToastrModule} from 'ngx-toastr';
import {ForgetPasswordComponent} from './Page/forget-password/forget-password.component';


@NgModule({
  declarations: [AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    VerificationCodePageComponent,
    ForgetPasswordComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PrimengModule,
    LyButtonModule,
    PrimengModule,
    LyToolbarModule,
    LyResizingCroppingImageModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    LyThemeModule.setTheme('minima-light'),
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      progressBar: true,
    }),
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders, CookieService, {provide: LY_THEME, useClass: MinimaLight, multi: true}],
  exports: [],
})
export class AppModule {
}
