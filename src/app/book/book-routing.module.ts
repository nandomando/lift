import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookPage } from './book.page';

const routes: Routes = [
  {
    path: '',
    component: BookPage
  },
  {
    path: 'today',
    loadChildren: () => import('./today/today.module').then( m => m.TodayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookPageRoutingModule {}
