import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PrivacyService } from '../services/privacy.service';
import { Subscription } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnDestroy {
  isPrivacyPolicyVisible = false;
  isCheckboxChecked: boolean = false; // This tracks the checkbox state
  isFormValid: boolean = false; // Tracks if the form is valid
  private subscription: Subscription;

  contactData = {
    fullname: '',
    email: '',
    message: '',
  };

  http = inject(HttpClient);

  constructor(private privacyService: PrivacyService) {
    this.subscription = this.privacyService.isVisible$.subscribe((visible) => {
      this.isPrivacyPolicyVisible = visible;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // Clean up the subscription
  }

  mailTest = false;

  post = {
    endPoint: 'https://www.fabion-latifi.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onCheckboxChange(event: any) {
    this.isCheckboxChecked = event.target.checked;
    this.validateForm();
  }

  validateForm() {
    this.isFormValid =
      this.contactData.fullname.trim() !== '' &&
      this.contactData.email.trim() !== '' &&
      this.contactData.message.trim() !== '' &&
      this.isCheckboxChecked;
  }

  onSubmit(ngForm: NgForm) {
    if (
      ngForm.submitted &&
      ngForm.form.valid &&
      !this.mailTest &&
      this.isCheckboxChecked
    ) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
