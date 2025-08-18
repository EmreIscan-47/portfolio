import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  yellowlogo = false;
  dropDownHover = false;
  dropDownActive = true;
  styleStatus = 0;

   toggleDropdown() {

     this.styleStatus = this.styleStatus === 1 ? 2: 1;

     if (this.styleStatus == 1) {
      document.body.classList.add("dropdown-active");
     } else {
       document.body.classList.remove("dropdown-active");
     }
   }
}
