import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'home', redirectTo: 'projects', pathMatch: 'full' },

  { path: 'project', loadChildren: () => import('./pages/projects/edit/edit.module').then( m => m.EditPageModule)},
  { path: 'projects', loadChildren: () => import('./pages/projects/list/list.module').then( m => m.ListPageModule)},

  { path: 'tasks', loadChildren: () => import('./pages/tasks/list/list.module').then( m => m.ListPageModule)},
  { path: 'task', loadChildren: () => import('./pages/tasks/edit/edit.module').then( m => m.EditPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
