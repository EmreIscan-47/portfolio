import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/all-header-components/header/header.component';
import { CommonModule } from '@angular/common';
import { SingleProjectShowcaseComponent } from './single-project-showcase/single-project-showcase.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-project-showcase',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SingleProjectShowcaseComponent],
  templateUrl: './project-showcase.component.html',
  styleUrl: './project-showcase.component.scss',
})
export class ProjectShowcaseComponent {
  showOtherLayout = true;
  projectId: number = 0;

  elPoloLocoSkills = [
    {
      logo: './../../../assets/img/project-showcase/Js.png',
      name: 'JavaScript',
    },
    {
      logo: './../../../assets/img/project-showcase/HTML.png',
      name: 'HTML',
    },
    {
      logo: './../../../assets/img/project-showcase/CSS.png',
      name: 'CSS',
    },
  ];

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      this.projectId = idParam !== null ? parseInt(idParam, 10) : 0;
    });
  }

  constructor(private route: ActivatedRoute) {}
}
