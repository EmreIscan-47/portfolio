import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-single-project-showcase',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './single-project-showcase.component.html',
  styleUrl: './single-project-showcase.component.scss',
})
export class SingleProjectShowcaseComponent {
  @Input() id!: number;

  constructor(private translate: TranslateService) {}

  currentProject: string = '';
  previousProject: number = 0;
  currentLink: string = '';
  currentGitLink: string = '';
  nextProject: number = 0;

  firstPicture: string = '';
  secondPicture: string = '';

  skillSet: { logo: string; name: string }[] = [];

  elPoloLocoSkills: { logo: string; name: string }[] = [
    {
      logo: './assets/img/project-showcase/HTML.png',
      name: 'HTML',
    },
    {
      logo: './assets/img/project-showcase/CSS.png',
      name: 'CSS',
    },
    {
      logo: './assets/img/project-showcase/Js.png',
      name: 'JavaScript',
    },
  ];

  joinSkills: { logo: string; name: string }[] = [
    {
      logo: './assets/img/project-showcase/HTML.png',
      name: 'HTML',
    },
    {
      logo: './assets/img/project-showcase/CSS.png',
      name: 'CSS',
    },
    {
      logo: './assets/img/project-showcase/Js.png',
      name: 'JavaScript',
    },
    {
      logo: './assets/img/project-showcase/Firebase.png',
      name: 'Firebase',
    },
  ];

  pokeDexSkills: { logo: string; name: string }[] = [
    {
      logo: './assets/img/project-showcase/HTML.png',
      name: 'HTML',
    },
    {
      logo: './assets/img/project-showcase/CSS.png',
      name: 'CSS',
    },
    {
      logo: './assets/img/project-showcase/Js.png',
      name: 'JavaScript',
    },
    {
      logo: './assets/img/project-showcase/Rest-Api.png',
      name: 'RestAPI',
    },
  ];

  ngOnInit() {
    this.goToProject(this.id);
  }

  goToProject(projectKey: number) {
    switch (projectKey) {
      case 1:
        this.changeProject('el-polo-loco', 2, 3);

        break;
      case 2:
        this.changeProject('join', 3, 1);
        break;
      case 3:
        this.changeProject('pokeDex', 1, 2);
        break;
      default:
        break;
    }
  }

  changeProject(
    currentProject: string,
    previousProject: number,
    nextProject: number
  ) {
    this.currentProject = currentProject;
    this.previousProject = previousProject;
    this.nextProject = nextProject;
    if (currentProject === 'el-polo-loco') {
      this.changeSingleProject(
        this.elPoloLocoSkills,
        './assets/img/project-showcase/el-pollo-loco.jpg',
        './assets/img/project-showcase/golden-logo.png',
        'https://www.el-polo-loco.emre-iscan.com/index.html',
        'https://github.com/EmreIscan-47/el-pollo-loco'
      );
    } else if (currentProject === 'join') {
      this.changeSingleProject(
        this.joinSkills,
        './assets/img/project-showcase/Join.jpg',
        './assets/img/project-showcase/join-sticker.png',
        'https://join.emre-iscan.com/html/index.html',
        'https://github.com/Yogibear-pixel-99/join'
      );
    } else {
      this.changeSingleProject(
        this.pokeDexSkills,
        './assets/img/project-showcase/PokeDex.jpg',
        './assets/img/project-showcase/golden-logo.png',
        'https://www.pokedex.emre-iscan.com/index.html',
        'https://github.com/EmreIscan-47/pokedex'
      );
    }
  }

  changeSingleProject(
    skillSet: { logo: string; name: string }[],
    firstPicture: string,
    secondPicture: string,
    currentLink: string,
    currentGitLink: string
  ) {
    this.skillSet = skillSet;
    this.firstPicture = firstPicture;
    this.secondPicture = secondPicture;
    this.currentLink = currentLink;
    this.currentGitLink = currentGitLink;
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
