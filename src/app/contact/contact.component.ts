import {
  Component,
  inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SectionTitleComponent } from '../shared/components/section-title/section-title.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitleComponent,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  @ViewChild('successAlert', { static: false }) successAlert!: ElementRef;
  @ViewChild('errorAlert', { static: false }) errorAlert!: ElementRef;
  isSubmitted: boolean = false;
  errorMessage: string = '';
  showError: boolean = false;

  submitForm = this.fb.group({
    acceptTerms: [false, Validators.requiredTrue],
    name: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
      ],
    ],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(1000),
      ],
    ],
  });
  constructor(
    public translate: TranslateService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  http = inject(HttpClient);
  mailTest = true;

  post = {
    endPoint: 'https://giuseppe-cino.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'text',
    },
  };

  isFieldValid(field: string): boolean {
    const formField = this.submitForm.get(field);
    return (
      formField !== null &&
      formField.invalid &&
      (formField.dirty || formField.touched)
    );
  }

  onSubmit(): void {
    if (this.submitForm.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.submitForm.value), {
          responseType: 'text',
        })
        .subscribe({
          next: (response) => {
            this.isSubmitted = true;
            this.showError = false;
            this.submitForm.reset();
            this.cd.markForCheck(); // Auffordern, die Ansicht auf Änderungen zu überprüfen

            setTimeout(() => {
              this.isSubmitted = false;
              if (this.successAlert && this.successAlert.nativeElement) {
                this.successAlert.nativeElement.focus();
              }
              this.cd.markForCheck(); // Erneut überprüfen
            }, 3000);
          },
          error: (error) => {
            console.error(error);
            this.errorMessage =
              'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.';
            this.showError = true;
            if (this.errorAlert && this.errorAlert.nativeElement) {
              this.errorAlert.nativeElement.focus();
            }
          },
          // complete: () => console.info('send post complete'),
        });
    } else if (this.mailTest) {
      // Logik für den Testmodus
      this.submitForm.reset();
    }
  }

  toggleAcceptTerms(): void {
    // Umschalten des Wertes von acceptTerms
    const currentValue = this.submitForm.get('acceptTerms')?.value;
    this.submitForm.get('acceptTerms')?.setValue(!currentValue);

    // Markieren als berührt, um Validierungsmeldungen anzuzeigen
    this.submitForm.get('acceptTerms')?.markAsTouched();
  }

  toggleAcceptTermsOnKeyPress(event: KeyboardEvent): void {
    if (event.key === ' ' || event.key === 'Enter') {
      this.toggleAcceptTerms();
      event.preventDefault();
    }
  }
}
