import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { REFERENCES_DATA } from '../references-data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss',
})
export class ReferenceComponent {
  referencesData = REFERENCES_DATA;

  currentIndex: number = 0; // Index to track the current reference

  // Get the currently displayed reference based on the current index
  get currentReference() {
    return this.referencesData[this.currentIndex];
  }

  // Method to go to the next reference
  nextReference() {
    this.currentIndex = (this.currentIndex + 1) % this.referencesData.length;
  }

  // Method to go to the previous reference
  prevReference() {
    this.currentIndex =
      (this.currentIndex - 1 + this.referencesData.length) %
      this.referencesData.length;
  }

  // Method to go to a specific reference based on index
  goToReference(index: number) {
    this.currentIndex = index;
  }

  constructor(public translate: TranslateService) {}
}
