import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  gitHubRoll = false;
  linkedInRoll = false;
  mailRoll = false;
  gitHubCountOne = 0;
  linkedInCountOne = 0;
  mailCountOne = 0;

  rollIn(imgRollNumer: Number) {
    switch (imgRollNumer) {
      case 1:
        this.gitHubCountOne = 1;
        this.gitHubRoll = true;
        break;
      case 2:
        this.linkedInRoll = true;
        break;
      case 3:
        this.mailRoll = true;
        break;
      default:
        break;
    }
  }

  rollOut(imgRollNumer: Number) {
    switch (imgRollNumer) {
      case 1:
        this.gitHubRoll = false;
        break;
      case 2:
        this.linkedInRoll = false;
        break;
      case 3:
        this.mailRoll = false;
        break;
      default:
        break;
    }
  }
}
