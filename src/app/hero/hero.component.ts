import { Component, HostListener } from '@angular/core';
import { SocialiconsComponent } from '../socialicons/socialicons.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SocialiconsComponent, CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  isVisible = false; // Initially, the button is not visible
  defaultImage = '/assets/img/arrow-up.svg';
  hoverImage = '/assets/img/arrow-up-hover.svg';

  currentImage = this.defaultImage;

  // Show/hide button based on scroll position
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isVisible = scrollPosition > 500; // Show the button when scrolled down 300px
  }

  // Scroll to the top of the page
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  changeImage(state: 'hover' | 'default') {
    this.currentImage = state === 'hover' ? this.hoverImage : this.defaultImage;
  }

  constructor(public translate: TranslateService) {}
}
