import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditPage } from './edit.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'projects'
  },
  {
    path: ':projectId/new',
    component: EditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditPage]
})
export class EditPageModule {}
