import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { TaskService } from '../../../shared/services/task.service';

@Injectable()
export class TaskListResolver implements Resolve<any>  {
    constructor(
        private taskService: TaskService
    ) { }

    async resolve(route: ActivatedRouteSnapshot) {
        const projectId = route.paramMap.get('projectId');
        return await this.taskService.all(projectId);
    }
}