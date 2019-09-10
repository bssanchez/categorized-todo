import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProjectService } from '../../../shared/services/project.service';
import { Project } from '../../../shared/interfaces/project.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public formProject: FormGroup;
  public pageTitle = 'Crear proyecto';

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private routerActivated: ActivatedRoute,
    private alertCtrl: AlertController
  ) {
    this.formProject = this.formBuilder.group({
      id: [this.guid()],
      name: ['', Validators.required],
      description: ['', Validators.required],
      avatar: ['', Validators.required],
      tasks: [null],
      active: [true]
    });

    const project = this.routerActivated.snapshot.data[0];
    if (project !== undefined && project !== null && project.id !== '') {
      this.formProject.setValue(project);
      this.pageTitle = 'Actualizar proyecto';
    }
  }

  ngOnInit() {
  }

  changeUploadItem(event) {
    const input = event.target;

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onloadend = (e: any) => {
        this.formProject.get('avatar').setValue(reader.result);
      };

      reader.readAsDataURL(input.files[0]);
    } else {
      this.formProject.get('avatar').setValue('');
    }
  }

  async insertProject() {
    await this.projectService.insert(this.formProject.value);
    this.alertCtrl.create({
      message: 'Proyecto almacenado satisfactoriamente',
      buttons: [{
        text: 'ok',
        handler: () => {
          this.navCtrl.navigateBack('/projects');
        }
      }]
    }).then(a => a.present());
  }

  async updateProject() {
    await this.projectService.update(this.formProject.value, this.formProject.value);

    this.alertCtrl.create({
      message: 'Proyecto actualizado satisfactoriamente',
      buttons: [{
        text: 'ok',
        handler: () => {
          this.navCtrl.navigateBack('/projects');
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
