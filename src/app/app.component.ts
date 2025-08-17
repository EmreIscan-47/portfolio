import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './main/hero/hero.component';
import { MyProjectsComponent } from './main/my-projects/my-projects.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { SkillsComponent } from './main/skills/skills.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { ContactInfoComponent } from './main/contact-info/contact-info.component';
import { FooterComponent } from './shared/all-footer-components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroComponent, MyProjectsComponent, AboutMeComponent, SkillsComponent, TestimonialsComponent, ContactInfoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
