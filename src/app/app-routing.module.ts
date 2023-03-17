import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'BOT', loadChildren: () => import('./bot-table/bot-table.module').then(m => m.BotTableModule) },
  { path: 'HAR', loadChildren: () => import( './har-table/har-table.module').then(m => m.HARTableModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
