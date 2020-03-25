import {NgModule} from '@angular/core';
import {NbMenuModule} from '@nebular/theme';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {ECommerceModule} from './e-commerce/e-commerce.module';
import {PagesRoutingModule} from './pages-routing.module';
import {MiscellaneousModule} from './miscellaneous/miscellaneous.module';
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
import {ActionComponent} from './components/action/action.component';
import {PlayersBoxTeamComponent} from './components/players-box-team/players-box-team.component';
import {YoutubePlayerComponent} from './components/youtube-player/youtube-player.component';
import {PlayerCardComponent} from './widgets/player-card/player-card.component';
import {ImageCropperComponent} from './widgets/image-cropper/image-cropper.component';
import {LyThemeModule, LY_THEME} from '@alyle/ui';
import {MinimaLight} from '@alyle/ui/themes/minima';
import {LyButtonModule} from '@alyle/ui/button';
import {LyToolbarModule} from '@alyle/ui/toolbar';
import {LyResizingCroppingImageModule} from '@alyle/ui/resizing-cropping-images';
import {UserPofileComponent} from './user-pofile/user-pofile.component';
import {AnalysisPageCountComponent} from './analysis-page/analysis-page-count/analysis-page-count.component';
import {ReportDetailsComponent} from './reports-page/report-details/report-details.component';

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
    LyButtonModule,
    LyToolbarModule,
    LyResizingCroppingImageModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    LyThemeModule.setTheme('minima-light'),
  ],
  declarations: [
    PagesComponent,
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
    ActionComponent,
    PlayersBoxTeamComponent,
    YoutubePlayerComponent,
    PlayerCardComponent,
    ImageCropperComponent,
    UserPofileComponent,
    AnalysisPageCountComponent,
    ReportDetailsComponent,
  ],
  providers: [{provide: LY_THEME, useClass: MinimaLight, multi: true}],

})
export class PagesModule {
}
