import {NgModule} from '@angular/core';
import {NbMenuModule} from '@nebular/theme';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {ECommerceModule} from './e-commerce/e-commerce.module';
import {PagesRoutingModule} from './pages-routing.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
import {HomePageComponent} from './home-page/home-page.component';
import {AnalysisPageComponent} from './analysis-page/analysis-page.component';
import {ClubsPageComponent} from './clubs-page/clubs-page.component';
import {TeamsPageComponent} from './teams-page/teams-page.component';
import {ActionsPageComponent} from './actions-page/actions-page.component';
import {ReportsPageComponent} from './reports-page/reports-page.component';
import {UsersPageComponent} from './users-page/users-page.component';
import {ModalComponent} from './widgets/modal/modal.component';
import {PrimengModule} from './primeng.module';
import {UserFormComponent} from './websiteForms/user-form/user-form.component';
import {ComparisonPageComponent} from './comparison-page/comparison-page.component';
import {PersonalPageComponent} from './personal-page/personal-page.component';
import {UserCardComponent} from './widgets/user-card/user-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TablePrimeNgComponent} from './widgets/table-prime-ng/table-prime-ng.component';
import {AngularMaterialModule} from './angular-material.module';
import {AnalysisMatchPageComponent} from './analysis-page/analysis-match-page/analysis-match-page.component';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NgxYoutubePlayerModule.forRoot(),
    PrimengModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PagesComponent,
    HomePageComponent,
    AnalysisPageComponent,
    ClubsPageComponent,
    TeamsPageComponent,
    ActionsPageComponent,
    ReportsPageComponent,
    UsersPageComponent,
    ModalComponent,
    UserFormComponent,
    ComparisonPageComponent,
    PersonalPageComponent,
    UserCardComponent,
    TablePrimeNgComponent,
    AnalysisMatchPageComponent,
  ],
})
export class PagesModule {
}
