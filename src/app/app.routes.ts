import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectShowcaseComponent } from './main/project-showcase/project-showcase.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

  { path: 'homepage', component: MainComponent },
  { path: 'project-showcase', component: ProjectShowcaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
