import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MainComponent } from './app/main/main.component';
import { provideRouter, Routes } from '@angular/router';
import { ProjectShowcaseComponent } from './app/main/project-showcase/project-showcase.component';

const routes: Routes = [

  { path: 'homepage', component: MainComponent },
  { path: 'project-showcase', component: ProjectShowcaseComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});