import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotTableComponent } from './bot-table.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';

const routes: Routes = [{ path: '', component: BotTableComponent }];
@NgModule({
  declarations: [
    BotTableComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes)
  ]
})
export class BotTableModule { }
