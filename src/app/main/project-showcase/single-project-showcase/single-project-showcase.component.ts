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
  nextProject: number = 0;

  firstPicture: string = '';
  secondPicture: string = '';

  skillSet: { logo: string; name: string }[] = [];

  elPoloLocoSkills = [
  {
      logo: './../../../assets/img/project-showcase/HTML.png',
      name: 'HTML',
    },
    {
      logo: './../../../assets/img/project-showcase/CSS.png',
      name: 'CSS',
    },
    {
      logo: './../../../assets/img/project-showcase/Js.png',
      name: 'JavaScript',
    },
  ];

  joinSkills = [
    {
      logo: './../../../assets/img/project-showcase/HTML.png',
      name: 'HTML',
    },
    {
      logo: './../../../assets/img/project-showcase/CSS.png',
      name: 'CSS',
    },
    {
      logo: './../../../assets/img/project-showcase/Js.png',
      name: 'JavaScript',
    },
      {
      logo: './../../../assets/img/project-showcase/Firebase.png',
      name: 'Firebase',
    },
  ];

  pokeDexSkills = [
    {
      logo: './../../../assets/img/project-showcase/HTML.png',
      name: 'HTML',
    },
    {
      logo: './../../../assets/img/project-showcase/CSS.png',
      name: 'CSS',
    },
    {
      logo: './../../../assets/img/project-showcase/Js.png',
      name: 'JavaScript',
    },
    {
      logo: './../../../assets/img/project-showcase/Rest-Api.png',
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

  changeProject(currentProject: string, previousProject: number, nextProject: number) {
    this.currentProject = currentProject;
    this.previousProject = previousProject;
    this.nextProject = nextProject;
    if (currentProject === 'el-polo-loco') {
      console.log("el-polo-loco");
      
      this.skillSet = this.elPoloLocoSkills;
      this.firstPicture = "./../../../assets/img/project-showcase/el-pollo-loco.jpg";
      this.secondPicture = "./../../../assets/img/project-showcase/golden-logo.png";
      console.log(
        this.firstPicture,
        this.secondPicture
      );
      
    } else if (currentProject === 'join') {
      this.skillSet = this.joinSkills;
      this.firstPicture = "./../../../assets/img/project-showcase/Join.jpg";
    this.secondPicture = "./../../../assets/img/project-showcase/join-sticker.png";
    } else {
      this.skillSet = this.pokeDexSkills;
this.firstPicture = "./../../../assets/img/project-showcase/PokeDex.jpg";
    this.secondPicture = "./../../../assets/img/project-showcase/golden-logo.png";
    console.log("yo");
    
    }
  }

}
