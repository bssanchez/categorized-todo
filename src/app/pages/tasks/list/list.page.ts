import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Task } from 'src/app/shared/interfaces/task.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public tasks: Array<Task> = [];
  public projectId = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) {
    this.tasks = this.activatedRoute.snapshot.data[0];
    this.projectId = this.activatedRoute.snapshot.params.projectId;
  }

  ngOnInit() {
  }

  createNewTask() {
    this.navCtrl.navigateForward(`/task/${this.projectId}/new`);
  }

}
