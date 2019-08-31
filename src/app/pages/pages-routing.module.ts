import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AnalysisPageComponent } from './analysis-page/analysis-page.component';
import { ClubsPageComponent } from './clubs-page/clubs-page.component';
import { TeamsPageComponent } from './teams-page/teams-page.component';
import { ActionsPageComponent } from './actions-page/actions-page.component';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ComparisonPageComponent } from './comparison-page/comparison-page.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomePageComponent,
    },
    {
      path: 'clubs',
      component: ClubsPageComponent,
    }, {
      path: 'teams',
      component: TeamsPageComponent,
    },
    {
      path: 'actions',
      component: ActionsPageComponent,
    },
    {
      path: 'users',
      component: UsersPageComponent,
    },
    {
      path: 'reports',
      component: ReportsPageComponent,
    },
    {
      path: 'analysis',
      component: AnalysisPageComponent,
    },
    {
      path: 'comparison',
      component: ComparisonPageComponent,
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
