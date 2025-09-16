import { Component, ElementRef, inject } from '@angular/core';
import { FooterComponent } from '../../shared/all-footer-components/footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [
    FooterComponent,
    FormsModule,
    HttpClientModule,
    CommonModule,
    TranslateModule,
    RouterModule,
  ],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss',
})
export class ContactInfoComponent {
  isButtonDisabled: boolean = true;
  isChecked: boolean = false;
  borderBlue: Number = 0;
  formSubmitted: boolean = false;

  namePlaceholder: string = 'Your name goes here';
  emailPlaceholder: string = 'youremail@email.com';
  messagePlaceholder: string = 'Hello Emre, I am interested in...';

  emailPattern = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/;

  nameIsNotValid: boolean = false;
  emailIsNotValid: boolean = false;
  messageIsNotValid: boolean = false;
  isValid: boolean = true;

  contactSent: boolean = false;

  http = inject(HttpClient);

  contactData: {
    name: string;
    email: string;
    message: string;
    agree: boolean;
  } = {
    name: '',
    email: '',
    message: '',
    agree: false,
  };

  isGermanActive: boolean = false;
  isViewed: boolean = false;

    mailTest:boolean = false;

  constructor(private translate: TranslateService, private el: ElementRef) {
    this.checkLanguage();

    this.translate.onLangChange.subscribe(() => {
      this.checkLanguage();
    });
  }

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

  checkLanguage() {
    this.isGermanActive = this.translate.currentLang === 'de';
    this.changePlaceHolder();
  }

  changePlaceHolder() {
    if (this.isGermanActive) {
      this.namePlaceholder = 'Dein Name kommt hierhin';
      this.emailPlaceholder = 'deineemail@email.com';
      this.messagePlaceholder = 'Hallo Emre, Ich interessiere mich für...';
    } else {
      this.namePlaceholder = 'Your name goes here';
      this.emailPlaceholder = 'youremail@email.com';
      this.messagePlaceholder = 'Hello Emre, I am interested in...';
    }
  }

  toggleCheckbox() {
    let checkboxREF = document.getElementById('checkbox') as HTMLImageElement;
    let filename = checkboxREF.src.substring(
      checkboxREF.src.lastIndexOf('/') + 1
    );
    this.contactData.agree = !this.contactData.agree;
    if (filename == 'checkbox-checked.png') {
      checkboxREF.src = './assets/img/contact-info/checkbox-default.png';
      this.isButtonDisabled = true;
    } else {
      checkboxREF.src = './assets/img/contact-info/checkbox-checked.png';
      this.isButtonDisabled = false;
    }
  }

  borderActive(borderNumber: Number) {
    this.borderBlue = borderNumber;
  }

  post = {
    endPoint: 'https://www.emre-iscan.com/sendMail.php',
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

  trimAll() {
    if (!this.contactData.name == null) {
      this.contactData = {
        name: this.contactData.name.trim(),
        email: this.contactData.email?.trim(),
        message: this.contactData.message.trim(),
        agree: this.contactData.agree,
      };
    }
  }

  validForm(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            console.log(response);
            
            ngForm.resetForm();
            this.contactAccepted();
            
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.contactAccepted();
    }
  }

  contactAccepted() {
    this.toggleCheckbox();
    this.contactData.agree = false;
    this.contactSent = true;

    setTimeout(() => {
      this.contactSent = false;
    }, 5000);
  }

  notValidForm(ngForm: NgForm) {
    if (!this.contactData.name) {
      this.namePlaceholder = this.translate.instant(
        'contact-me.form.placeholder-warning.name-warning'
      );
    }
    if (!this.contactData.email && this.contactData.email != null) {
      this.contactData.email.trim();
      this.emailPlaceholder = this.translate.instant(
        'contact-me.form.placeholder-warning.email-warning'
      );
    }
    if (!this.contactData.message) {
      this.messagePlaceholder = this.translate.instant(
        'contact-me.form.placeholder-warning.message-warning'
      );
    }
  }

  namePlaceHolderNotValid() {
    this.trimAll();
    if (!this.contactData.name) {
      this.namePlaceholder = this.translate.instant(
        'contact-me.form.placeholder-warning.name-warning'
      );
      return true;
    }
    return false;
  }

  emailNotValid() {
    this.trimAll();
    if (this.contactData.email.length >= 1) {
      this.validateEmail();
    }
    if (!this.contactData.email && this.contactData.email != null) {
      this.contactData.email.trim();
      this.emailPlaceholder = this.translate.instant(
        'contact-me.form.placeholder-warning.email-warning'
      );

      return true;
    }
    return false;
  }

  validateEmail() {
    return this.isValid = this.emailPattern.test(
      this.contactData.email.trim()
    );
  }

  messageNotValid() {
    if (!this.contactData.message) {
      this.messagePlaceholder = this.translate.instant(
        'contact-me.form.placeholder-warning.message-warning'
      );
      return true;
    }
    return false;
  }

  disabledClick() {
    console.log('yo');
  }
}
