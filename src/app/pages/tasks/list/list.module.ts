import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListPage } from './list.page';
import { TaskListResolver } from '../resolvers/task-list.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: ':projectId',
    component: ListPage,
    resolve: [ TaskListResolver ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListPage],
  providers: [
    TaskListResolver
  ]
})
export class ListPageModule {}
