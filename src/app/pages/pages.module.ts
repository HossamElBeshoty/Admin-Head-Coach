import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AnalysisPageComponent } from './analysis-page/analysis-page.component';
import { ClubsPageComponent } from './clubs-page/clubs-page.component';
import { TeamsPageComponent } from './teams-page/teams-page.component';
import { ActionsPageComponent } from './actions-page/actions-page.component';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ModalComponent } from './widgets/modal/modal.component';
import { PrimengModule } from './primeng.module';
import { UserFormComponent } from './websiteForms/user-form/user-form.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    PrimengModule,
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
  ],
})
export class PagesModule {
}
