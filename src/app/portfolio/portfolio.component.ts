import { Component } from '@angular/core';
import { PROJECTS_DATA } from '../projects-data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projectsData = PROJECTS_DATA;

  constructor(public translate: TranslateService) {}
}
