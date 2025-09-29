import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  gitHubRoll: boolean = false;
  linkedInRoll: boolean = false;
  mailRoll: boolean = false;

  gitHubCountOne: number = 0;
  linkedInCountOne: number = 0;
  mailCountOne: number = 0;

  isGermanActive: boolean = false;
  onHover: boolean = false;

  @Input() otherLayout: boolean = false;

  constructor(private router: Router, private translate: TranslateService) {
    this.checkLanguage();
    this.translate.onLangChange.subscribe(() => {
      this.checkLanguage();
    });
  }

  checkLanguage() {
    this.isGermanActive = this.translate.currentLang === 'de';
  }

  goToPage(url: string) {
    this.router.navigate([url]);
  }

  goToStartPage() {
    const startPage = document.getElementById('hero');
    if (this.otherLayout) {
      this.router.navigate(['homepage']);
    } else {
      if (startPage) {
        startPage.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

   openMail() {
    window.location.href = 'mailto:connect@emre-iscan.com';
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

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
