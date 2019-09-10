import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/interfaces/project.interface';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public projects: Array<Project> = [];
  public filterName = '';
  public toggleSearch = false;

  constructor(
    private navCtrl: NavController,
    private routerActivated: ActivatedRoute
  ) {
    this.projects = this.routerActivated.snapshot.data[0];
  }

  ngOnInit() {
  }

  createNewProject() {
    this.navCtrl.navigateForward('/project/new');
  }

  async deleteProject(newProjects) {
    this.projects = newProjects;
  }
}
