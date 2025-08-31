import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
laptopHover = false;

constructor(private router: Router, private translate: TranslateService) {}

goToProject(Number: number) {
  this.router.navigate(['project-showcase', Number]);
}
}
