import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import {FileUploadModule} from 'primeng/fileupload';
import {TabMenuModule} from 'primeng/tabmenu';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FileUploadModule,
    SelectButtonModule,
    FormsModule,
    TabMenuModule,
    ToastModule,
    DropdownModule,
    ToastModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    TableModule
  ],
  exports:[  CommonModule,
    FileUploadModule,
    SelectButtonModule,
    FormsModule,
    ToastModule,
    TabMenuModule,
    DropdownModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    TableModule
  ]
})
export class SharedModuleModule { }
