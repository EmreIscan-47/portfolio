import { Component, ElementRef } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  isGermanActive: boolean = false;
  isViewed: boolean = false;

  constructor(private translate: TranslateService, private el: ElementRef) {
    this.checkLanguage();

    this.translate.onLangChange.subscribe(() => {
      this.checkLanguage();
    });
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isViewed = true;
          } else {
            this.isViewed = false;
          }
        });
      },
      { threshold: 0.001 }
    );

    observer.observe(this.el.nativeElement);
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
