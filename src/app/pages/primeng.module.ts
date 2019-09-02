import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { RatingModule } from 'primeng/rating';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
@NgModule({
  declarations: [],
  imports: [CommonModule,
    DialogModule,
    ButtonModule,
    TableModule,
    FileUploadModule,
    TabViewModule,
    PanelModule,
    FieldsetModule,
    SplitButtonModule,
    RatingModule],
  exports: [CommonModule,
    DialogModule,
    ButtonModule,
    TableModule,
    FileUploadModule,
    SplitButtonModule,
    TabViewModule,
    PanelModule,
    FieldsetModule,
    RatingModule],
})
export class PrimengModule { }
