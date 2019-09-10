import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { Project } from '../../interfaces/project.interface';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;
  @Output() removeProject = new EventEmitter();

  constructor(
    private projectService: ProjectService,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  delete() {
    this.alertCtrl.create({
      message: '¿Realmente deseas eliminar el proyecto?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Sí',
          handler: async () => {
            const newProjects = await this.projectService.delete(this.project);
            this.removeProject.emit(newProjects);
          }
        }
      ]
    }).then(a => a.present());
  }

  async toggleActiveMode(project, active) {
    this.project = await this.projectService.update(project, { active });
  }

  editProject() {
    this.navCtrl.navigateForward(['/project/edit', this.project.id]);
  }

  showTasksProject() {
    this.navCtrl.navigateForward(['/tasks', this.project.id]);
  }
}
