import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/all-header-components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  firstWrapper = ['F', 'r', 'o', 'n', 't', 'e', 'd'];
  secondWrapper = ['D', 'E', 'V','E','L', 'O','P','E', 'R'];
  hoveredIndex: Number | null = null;
  onMouseEnter(i: Number) {
   this.hoveredIndex= i;
  }

  onMouseLeave() {
  this.hoveredIndex = null;
  }
}
