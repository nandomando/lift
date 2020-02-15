import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/tab/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),
      },
      {
        path: 'progress',
        loadChildren: () => import('../progress/progress.module').then( m => m.ProgressPageModule),
      },
      {
        path: 'book',
        loadChildren: () => import('../book/book.module').then( m => m.BookPageModule),
      },
      {
        path: 'exercise',
        loadChildren: () => import('../exercise/exercise.module').then( m => m.ExercisePageModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
