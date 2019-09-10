import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListPage } from './list.page';
import { SharedModule } from '../../../shared/shared.module';
import { ProjectListResolver } from '../resolvers/project-list.resolver';
import { FilterProjectPipe } from '../../../shared/pipes/filter-project.pipe';

const routes: Routes = [
  {
    path: '',
    component: ListPage,
    resolve: [ ProjectListResolver ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListPage],
  providers: [ ProjectListResolver ]
})
export class ListPageModule {}
