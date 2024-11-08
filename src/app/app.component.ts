import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import 'aos/dist/aos.css';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutmeComponent,
    MyskillsComponent,
    PortfolioComponent,
    ReferenceComponent,
    ContactComponent,
    FooterComponent,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'de'; // Default to 'de'
    translate.use(savedLang);
  }

  ngOnInit() {
    AOS.init({
      duration: 1200, // Duration of animations in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      // other options...
    });
  }
}
