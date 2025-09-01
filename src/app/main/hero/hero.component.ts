import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/all-header-components/header/header.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  firstWrapper = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd'];
  secondWrapper = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];
  hoveredIndex: Number | null = null;
  helloWorldHover: boolean = false;
  rollIn = false;
  isGermanActive: boolean = false;

  constructor(private translate: TranslateService) {
    this.changeWrapper();
    this.checkLanguage();

    this.translate.onLangChange.subscribe(() => {
      this.changeWrapper();
      this.checkLanguage();
    });
  }

  checkLanguage() {
    this.isGermanActive = this.translate.currentLang === 'de';
  }

  changeWrapper() {
    if (this.translate.currentLang === 'de') {
      this.secondWrapper = ['E', 'N', 'T', 'W', 'I', 'C', 'K', 'L', 'E', 'R'];
    } else {
      this.secondWrapper = ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'];
    }
  }

  onMouseEnter(i: Number) {
    this.hoveredIndex = i;
  }

  onMouseLeave() {
    this.hoveredIndex = null;
  }

  goTo(url: string) {
    const element = document.getElementById(url);
    if (element) {
      element.scrollIntoView();
    }
  }
}
