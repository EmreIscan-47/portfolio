import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import {
    TranslateService,
    TranslateModule
} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainComponent, RouterModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'portfolio';

   

    constructor( private translate: TranslateService) {
        this.translate.addLangs(['de', 'en']);
        this.translate.setFallbackLang('en');
        this.translate.use('en');
    }
}
