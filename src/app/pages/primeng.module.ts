import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {TabViewModule} from 'primeng/tabview';
import {FieldsetModule} from 'primeng/fieldset';
import {RatingModule} from 'primeng/rating';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AccordionModule} from 'primeng/accordion';
import {StepsModule} from 'primeng/steps';
import {PickListModule} from 'primeng/picklist';
import {ToolbarModule} from 'primeng/toolbar';
import {LightboxModule} from 'primeng/lightbox';
import {TreeTableModule} from 'primeng/treetable';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [CommonModule,
    DialogModule,
    TreeTableModule,
    ButtonModule,
    TableModule,
    FileUploadModule,
    ToolbarModule,
    TabViewModule,
    PanelModule,
    FieldsetModule,
    SplitButtonModule,
    AutoCompleteModule,
    AccordionModule,
    LightboxModule,
    PickListModule,
    StepsModule,
    SidebarModule,
    RatingModule],
  exports: [CommonModule,
    DialogModule,
    ButtonModule,
    TableModule,
    FileUploadModule,
    SplitButtonModule,
    TabViewModule,
    PanelModule,
    ToolbarModule,
    FieldsetModule,
    LightboxModule,
    TreeTableModule,
    PickListModule,
    StepsModule,
    AutoCompleteModule,
    SidebarModule,
    AccordionModule,
    RatingModule],
})
export class PrimengModule {
}
