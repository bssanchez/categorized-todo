import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Task } from '../interfaces/task.interface';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private storage: Storage
  ) { }


  /**
   * Insert task into local storage
   * @param project Project
   */
  public insert(projectId: string, task: Task) {
    return new Promise((resolve) => {
      this.storage.get('projects').then(projects => {
        projects = JSON.parse(projects);

        projects.forEach((p, k) => {
          if (p.id === projectId) {
            if (p.tasks === null || p.tasks.length === 0) {
              p.tasks = new Array<Task>();
            }

            p.tasks.push(task);
            projects[k] = p;
          }
        });

        this.storage.set('projects', JSON.stringify(projects));
        resolve(task);
      });
    });
  }

  /**
   * retrieve all tasks of specific project from local storage
   */
  public all(projectId: string): Promise<Task[]> {
    return new Promise((resolve) => {
      this.storage.get('projects').then(projects => {
        if (projects === null) {
          projects = new Array<Project>();
        } else {
          projects = JSON.parse(projects);
        }

        projects.forEach(p => {
          if (p.id === projectId && p.tasks !== null) {
            resolve(p.tasks);
          }
        });

        resolve([]);
      });
    });
  }
}
