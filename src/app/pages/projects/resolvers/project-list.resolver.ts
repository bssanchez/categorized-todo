import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ProjectService } from 'src/app/shared/services/project.service';

@Injectable()
export class ProjectListResolver implements Resolve<any>  {
    constructor(
        private projectService: ProjectService
    ) { }

    async resolve(route: ActivatedRouteSnapshot) {
        return await this.projectService.all();
    }
}