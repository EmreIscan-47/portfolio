import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
})
export class MyProjectsComponent {
  laptopHover: boolean = false;
  isViewed: boolean = false;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private el: ElementRef
  ) {}

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

  goToProject(Number: number) {
    this.router.navigate(['project-showcase', Number]);
  }
}
