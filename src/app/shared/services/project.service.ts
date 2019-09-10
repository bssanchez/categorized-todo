import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private storage: Storage
  ) { }


  /**
   * Insert project into local storage
   * @param project Project
   */
  public insert(project: Project) {
    return new Promise((resolve) => {
      this.storage.get('projects').then(projects => {
        if (projects === null) {
          projects = new Array<Project>();
        } else {
          projects = JSON.parse(projects);
        }

        projects.push(project);
        this.storage.set('projects', JSON.stringify(projects));

        resolve(project);
      });
    });
  }

  /**
   * retrieve all projects from local storage
   */
  public all(): Promise<Project[]> {
    return new Promise((resolve) => {
      this.storage.get('projects').then(projects => {
        if (projects === null) {
          projects = new Array<Project>();
        } else {
          projects = JSON.parse(projects);
        }

        resolve(projects);
      });
    });
  }

  /**
   * Update project in local storage
   * @param project : Project
   * @param newData : Project
   */
  public update(project, newData): Promise<Project> {
    return new Promise((resolve) => {
      this.storage.get('projects').then(async projects => {
        project = { ...project, ...newData };
        projects = JSON.parse(projects);

        projects.forEach((p, k)=> {
          if (p.id === project.id) {
            projects[k] = project;
          }
        });

        await this.storage.set('projects', JSON.stringify(projects));
        resolve(project);
      });
    });
  }

  /**
   * Delete project in local storage
   * @param project : Project
   */
  public delete(project): Promise<Project[]> {
    return new Promise((resolve) => {
      this.storage.get('projects').then(async projects => {
        projects = JSON.parse(projects);

        projects = projects.filter((p) => {
          return p !== null && p.id !== project.id;
        });

        await this.storage.set('projects', JSON.stringify(projects));
        resolve(projects);
      });
    });
  }

  /**
   * Retrieve project by ID
   * @param id : string
   */
  public get(id): Promise<Project[]> | null {
    return new Promise((resolve) => {
      this.storage.get('projects').then(projects => {
        projects = JSON.parse(projects);

        projects.forEach(p => {
          if (p.id === id) {
            resolve(p);
          }
        });

        resolve(null);
      });
    });
  }
}
