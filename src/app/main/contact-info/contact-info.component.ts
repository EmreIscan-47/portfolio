import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FooterComponent } from '../../shared/all-footer-components/footer/footer.component';
@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [MatCheckboxModule, FooterComponent],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {

}
