import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;
  menuIconSrc = '/assets/img/burger-menu.svg'; // Default icon

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Toggle the icon source
    this.menuIconSrc = this.isMenuOpen
      ? '/assets/img/x-menu.svg'
      : '/assets/img/burger-menu.svg';

    // Add or remove 'no-scroll' class on the body element
    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.menuIconSrc = '/assets/img/burger-menu.svg';
    document.body.classList.remove('no-scroll');
  }

  constructor(private translate: TranslateService) {}

  translateText(lang: string) {
    this.translate.use(lang);
  }
}

/*

isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private translate: TranslateService) {}

  translateText(lang: string) {
    this.translate.use(lang);
  }

  */
