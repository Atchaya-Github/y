import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HARTableComponent } from './har-table/har-table.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { Routes,RouterModule} from '@angular/router';
import { MessageService } from 'primeng/api';
import { DetailsComponent } from '../details/details.component';
import { HARTableService } from '../HAR-service/har-table.service';

const routes: Routes = [{ path: '', component: HARTableComponent },
{ path: 'details', component: DetailsComponent }];
@NgModule({
  declarations: [
    HARTableComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes)
  ],
  providers: [MessageService,HARTableService]
})
export class HARTableModule {}
