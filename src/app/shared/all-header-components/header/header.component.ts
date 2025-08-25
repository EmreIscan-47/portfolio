import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  yellowlogo = false;
  dropDownOpen = false;
  closeButtonActive = false;
  languageAnimation = true;
  @Input() otherLayout = false;

  dropDownActive = true;
  styleStatus = 0;

constructor(private router: Router) {}

   goToHomePage(){
      this.router.navigate(['/homepage']);
   }
   

  openDropdown() {
    if (this.otherLayout) {
      console.log("yo");
      
      this.styleStatus = 3;
    } else {
      this.styleStatus = 1;
    }

    this.dropDownOpen = true;
    document.body.classList.add('dropdown-active');
    setTimeout(() => {
      this.dropDownOpen = false;
    }, 2000);
  }

  closeDropdown() {
     if (this.otherLayout) {
      this.styleStatus = 4;
    } else {
      this.styleStatus = 2;
    }
    this.closeButtonActive = true;
    this.dropDownOpen = true;
    document.body.classList.remove('dropdown-active');
    setTimeout(() => {
      this.closeButtonActive = false;
      this.dropDownOpen = false;
    }, 2000);
  }

  changeLanguage(language: string) {

    if (language == "DE") {
      this.languageAnimation = true;
    } else {
      this.languageAnimation = false;
    }
  }


}
