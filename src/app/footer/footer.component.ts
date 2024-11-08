import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SocialiconsComponent } from '../socialicons/socialicons.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PrivacyService } from '../services/privacy.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, SocialiconsComponent, CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear: number;

  constructor(private privacyService: PrivacyService) {
    this.currentYear = new Date().getFullYear();
  }
}
