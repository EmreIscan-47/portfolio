import { Component, inject } from '@angular/core';
import { FooterComponent } from '../../shared/all-footer-components/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [FooterComponent, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss',
})
export class ContactInfoComponent {
  isButtonDisabled = true;
  isChecked = false;
  borderBlue: Number = 0;
  formSubmitted = false;

  namePlaceholder = 'Your name goes here';
  emailPlaceholder = 'youremail@email.com';
  messagePlaceholder = 'Hello Lukas, I am interested in...';

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    agree: false,
  };

  toggleCheckbox() {
    let checkboxREF = document.getElementById('checkbox') as HTMLImageElement;
    let filename = checkboxREF.src.substring(
      checkboxREF.src.lastIndexOf('/') + 1
    );
    this.contactData.agree = !this.contactData.agree;
    if (filename == 'checkbox-checked.png') {
      checkboxREF.src =
        './../../../assets/img/contact-info/checkbox-default.png';
      this.isButtonDisabled = true;
    } else {
      checkboxREF.src =
        './../../../assets/img/contact-info/checkbox-checked.png';
      this.isButtonDisabled = false;
    }
  }

  borderActive(borderNumber: Number) {
    this.borderBlue = borderNumber;
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;
    this.trimAll();
    if (ngForm.submitted && ngForm.form.valid) {
      this.validForm(ngForm);
    } else if (!ngForm.valid) {
      this.notValidForm(ngForm);
      ngForm.control.markAllAsTouched();
      return;
    }
  }

  trimAll(){
    this.contactData= {
    name: this.contactData.name.trim(),
    email: this.contactData.email?.trim(),
    message: this.contactData.message.trim(),
    agree: this.contactData.agree,
  };
  }

  validForm(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  notValidForm(ngForm: NgForm) {
    if (!this.contactData.name) {
      this.namePlaceholder = 'Oops! it seems your name is missing ';
    }
    if (!this.contactData.email) {
      this.contactData.email.trim();
      this.emailPlaceholder = 'Hoppla! your email is required';
    }
    if (!this.contactData.message) {

      this.messagePlaceholder = 'What do you need to develop?';
    }
  }

  disabledClick() {
    console.log('yo');
  }
}
