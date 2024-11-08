import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrivacyService {
  public isVisibleSubject = new BehaviorSubject<boolean>(false);
  isVisible$ = this.isVisibleSubject.asObservable();

  toggleVisibility() {
    const currentValue = this.isVisibleSubject.value;
    this.isVisibleSubject.next(!currentValue);
    this.setBodyScroll(!currentValue);
  }

  private setBodyScroll(isVisible: boolean) {
    if (isVisible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }
  }
}
