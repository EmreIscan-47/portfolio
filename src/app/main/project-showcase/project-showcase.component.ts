import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/all-header-components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-showcase',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './project-showcase.component.html',
  styleUrl: './project-showcase.component.scss',
})
export class ProjectShowcaseComponent {
  showOtherLayout = true;

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
    }
  ];

  constructor() {}
}
