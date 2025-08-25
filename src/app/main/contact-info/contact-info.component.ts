import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/all-footer-components/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [FooterComponent, FormsModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss',
})

export class ContactInfoComponent {
  isButtonDisabled = true;
  isChecked = false;
  borderBlue: Number = 0;

  contactData = {
    name: "",
    email: "",
    message: "",
    agree: false
  }

  toggleCheckbox() {
    let checkboxREF = document.getElementById('checkbox') as HTMLImageElement;
    let filename = checkboxREF.src.substring(checkboxREF.src.lastIndexOf('/') + 1);
   this.contactData.agree = !this.contactData.agree;
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

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
         console.log(this.contactData);
    }
 
    
  }

  

 disabledClick(){
    console.log("yo");
    
  }
}
