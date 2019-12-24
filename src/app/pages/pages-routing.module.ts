import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {ECommerceComponent} from './e-commerce/e-commerce.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import {AnalysisPageComponent} from './analysis-page/analysis-page.component';
import {TeamsPageComponent} from './teams-page/teams-page.component';
import {ActionsPageComponent} from './actions-page/actions-page.component';
import {ReportsPageComponent} from './reports-page/reports-page.component';
import {UsersPageComponent} from './users-page/users-page.component';
import {ComparisonPageComponent} from './comparison-page/comparison-page.component';
import {PersonalPageComponent} from './personal-page/personal-page.component';
import {AnalysisMatchPageComponent} from './analysis-page/analysis-match-page/analysis-match-page.component';
import {AuthGuard} from '../auth/auth.guard';
import {UserPofileComponent} from './user-pofile/user-pofile.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'home',
      component: ECommerceComponent,
    },
    {
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
      path: 'personal/:id',
      component: PersonalPageComponent,
    },
    {
      path: 'user/:id',
      component: UserPofileComponent,
    },
    {
      path: 'analysis/matchAnalysis/:id',
      component: AnalysisMatchPageComponent,
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
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
