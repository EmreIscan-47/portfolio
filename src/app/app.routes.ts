import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectShowcaseComponent } from './main/project-showcase/project-showcase.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: '/project-showcase', component: ProjectShowcaseComponent}
];
