import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/all-header-components/header/header.component';
import { FooterComponent } from '../../shared/all-footer-components/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  showOtherLayout: boolean = true;
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
