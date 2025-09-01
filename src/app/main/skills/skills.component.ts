import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
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
}
