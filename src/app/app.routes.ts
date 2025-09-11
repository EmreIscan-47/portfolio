import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectShowcaseComponent } from './main/project-showcase/project-showcase.component';
import { LegalNoticeComponent } from './main/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './main/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'project-showcase/:id', component: ProjectShowcaseComponent },
  { path: 'legal-notice', component: LegalNoticeComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
];