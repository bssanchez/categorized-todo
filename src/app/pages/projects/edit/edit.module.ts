import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditPage } from './edit.page';
import { ProjectEditResolver } from '../resolvers/project-edit.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: 'new',
    component: EditPage
  },
  {
    path: 'edit/:id',
    component: EditPage,
    resolve: [
      ProjectEditResolver
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditPage],
  providers: [
    ProjectEditResolver
  ]
})
export class EditPageModule {}
