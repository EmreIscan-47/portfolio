import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/all-footer-components/footer/footer.component';
@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss',
})

export class ContactInfoComponent {
  isButtonDisabled = true;
  borderBlue: Number = 0;

  toggleCheckbox() {
    let checkboxREF = document.getElementById('checkbox') as HTMLImageElement;
    let filename = checkboxREF.src.substring(checkboxREF.src.lastIndexOf('/') + 1);

    if (filename =='checkbox-checked.png') {
      checkboxREF.src = './../../../assets/img/contact-info/checkbox-default.png';
      this.isButtonDisabled = true;
    } else {
      checkboxREF.src = './../../../assets/img/contact-info/checkbox-checked.png';
      this.isButtonDisabled = false;
    }
  }

  borderActive(borderNumber: Number) {
   this.borderBlue = borderNumber;
  }
}
