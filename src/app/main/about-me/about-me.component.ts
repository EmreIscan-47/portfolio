import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
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
  
  goTo(url: string) {
    const element = document.getElementById(url);
    if (element) {
      element.scrollIntoView();
    }
  }
}
