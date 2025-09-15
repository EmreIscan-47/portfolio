import { Component, ElementRef } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  isViewed: boolean = false;
  constructor(private translate: TranslateService, private el: ElementRef) {}

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
}
