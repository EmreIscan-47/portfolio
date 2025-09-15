import { Component, ElementRef, Renderer2 } from '@angular/core';
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
  changeImg: number = 0;
  currentImg: string = './../../../assets/img/skills/pull-me-en.png';
  pulledImg: string = './../../../assets/img/skills/pull-me-pulled.png';
  finishedImg: string = './../../../assets/img/skills/pull-me-en-finished.png';
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
      { threshold: 0.1 }
    );

    observer.observe(this.el.nativeElement);
  }

  checkLanguage() {
    this.isGermanActive = this.translate.currentLang === 'de';
    if (this.isGermanActive) {
      this.currentImg = './../../../assets/img/skills/pull-me-de.png';
      this.finishedImg = './../../../assets/img/skills/pull-me-de-finished.png';
    } else {
      this.currentImg = './../../../assets/img/skills/pull-me-en.png';
      this.finishedImg = './../../../assets/img/skills/pull-me-en-finished.png';
    }
  }

  pullSticker() {
    if (this.changeImg === 0) {
      this.changeImg = 1;
      this.currentImg = this.pulledImg;
      setTimeout(() => {
        this.currentImg = this.finishedImg;
      }, 500);
    } else {
      this.changeImg = 0;
      this.currentImg = this.pulledImg;
      setTimeout(() => {
        this.currentImg = this.isGermanActive
          ? './../../../assets/img/skills/pull-me-de.png'
          : './../../../assets/img/skills/pull-me-en.png';
      }, 500);
    }
    /*  setTimeout(() => {
      this.changeImg = 2;
      this.currentImg = this.finishedImg;
    }, 1000);
    setTimeout(() => {
      this.currentImg = this.pulledImg;
    }, 4000);
    setTimeout(() => {
      this.changeImg = 0;
      this.currentImg = this.isGermanActive
        ? './../../../assets/img/skills/pull-me-de.png'
        : './../../../assets/img/skills/pull-me-en.png';
    }, 4500); */
  }
}
