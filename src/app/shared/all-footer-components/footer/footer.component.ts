import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
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

  isGermanActive: boolean = false;

  constructor(private translate: TranslateService) {
    this.checkLanguage();


    this.translate.onLangChange.subscribe(() => {
      this.checkLanguage();
    });
  }

  checkLanguage() {
    this.isGermanActive = this.translate.currentLang === 'de';
  }

  rollIn(imgRollNumer: Number) {
    switch (imgRollNumer) {
      case 1:
        this.gitHubCountOne = 1;
        this.gitHubRoll = true;
        break;
      case 2:
         this.linkedInCountOne = 1;
        this.linkedInRoll = true;
        break;
      case 3:
         this.mailCountOne = 1;
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
