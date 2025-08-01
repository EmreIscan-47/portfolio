import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/all-header-components/header/header.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
