import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TaskService } from '../../../shared/services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public formTask: FormGroup;
  public pageTitle = 'Crear tarea';
  public projectId = 'Crear Tarea';

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private alertCtrl: AlertController,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) {
    this.formTask = this.formBuilder.group({
      id: [this.guid()],
      name: ['', Validators.required],
      status: [false]
    });

    this.projectId = this.activatedRoute.snapshot.params.projectId;
  }

  ngOnInit() {
  }

  async insertProject() {
    await this.taskService.insert(this.projectId, this.formTask.value);
    this.alertCtrl.create({
      message: 'Tarea almacenada satisfactoriamente',
      buttons: [{
        text: 'ok',
        handler: () => {
          this.navCtrl.navigateBack(`/tasks/${this.projectId}`);
        }
      }]
    }).then(a => a.present());
  }

  private guid() {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };

    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      s4()
    );
  }
}
