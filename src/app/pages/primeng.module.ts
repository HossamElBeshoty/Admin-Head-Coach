import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
@NgModule({
  declarations: [],
  imports: [CommonModule, DialogModule, ButtonModule, TableModule, FileUploadModule],
  exports: [CommonModule, DialogModule, ButtonModule, TableModule, FileUploadModule]
})
export class PrimengModule { }
