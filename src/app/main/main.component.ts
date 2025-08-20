import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FooterComponent } from '../shared/all-footer-components/footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent, MyProjectsComponent, AboutMeComponent, SkillsComponent,TestimonialsComponent,ContactInfoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
