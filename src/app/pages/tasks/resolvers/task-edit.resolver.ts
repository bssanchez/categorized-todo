import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProjectService } from 'src/app/shared/services/project.service';

@Injectable()
export class TaskEditResolver implements Resolve<any>  {
    constructor(
        private projectService: ProjectService
    ) { }


    async resolve(route: ActivatedRouteSnapshot) {
        const id = route.paramMap.get('id');
        return await this.projectService.get(id);
    }
}