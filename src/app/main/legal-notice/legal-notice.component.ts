import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/all-header-components/header/header.component';
import { FooterComponent } from '../../shared/all-footer-components/footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
showOtherLayout = true;
}
