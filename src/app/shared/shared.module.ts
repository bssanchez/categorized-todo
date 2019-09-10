import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { FilterProjectPipe } from './pipes/filter-project.pipe';

@NgModule({
    declarations: [
        ProjectItemComponent,
        FilterProjectPipe
    ],
    imports: [
        IonicModule,
    ],
    providers: [

    ],
    exports: [
        ProjectItemComponent,
        FilterProjectPipe
    ]
})
export class SharedModule { }