import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss',
})
export class MyskillsComponent {
  constructor(public translate: TranslateService) {}
}
