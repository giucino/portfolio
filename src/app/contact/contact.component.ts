import {
  Component,
  inject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SectionTitleComponent } from '../shared/components/section-title/section-title.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitleComponent,
    TranslateModule,
    ReactiveFormsModule,
    // FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  isSubmitted = false;
  errorMessage: string = '';
  showError: boolean = false;

  submitForm = this.fb.group({
    name: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
      ],
    ],
    phone: ['', Validators.pattern(/^\d+$/)],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
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
      !this.isSubmitted &&
      formField !== null &&
      formField.invalid &&
      (formField.dirty || formField.touched || this.isSubmitted)
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
            console.info(
              'submitted form',
              this.submitForm.value,
              this.submitForm.invalid
            );
            this.isSubmitted = true;
            this.showError = false;
            this.submitForm.reset();
            this.cd.markForCheck(); // Auffordern, die Ansicht auf Änderungen zu überprüfen

            setTimeout(() => {
              this.isSubmitted = false;
              this.cd.markForCheck(); // Erneut überprüfen
            }, 3000);
          },
          error: (error) => {
            console.error(error);
            this.errorMessage =
              'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.';
            this.showError = true;
          },
          complete: () => console.info('send post complete'),
        });
    } else if (this.mailTest) {
      // Logik für den Testmodus
      this.submitForm.reset();
    }
  }
}

// onSubmit(ngForm: NgForm) {
//   if (ngForm.submitted && ngForm.form.valid) {
//     this.http.post(this.post.endPoint, this.post.body(this.contactData), { responseType: 'text' })
//       .subscribe({
//         next: (response) => {
//           // Feedback an den Benutzer, dass die Nachricht erfolgreich gesendet wurde
//           console.info('Nachricht erfolgreich gesendet.');
//           this.isSubmitted = true;
//           ngForm.resetForm();
//           // Optional: Zeige eine Erfolgsmeldung im UI
//         },
//         error: (error) => {
//           console.error(error);
//           // Optional: Zeige eine Fehlermeldung im UI
//         },
//         complete: () => console.info('send post complete'),
//       });
//   } else if (this.mailTest) {
//     // Logik für den Testmodus
//     ngForm.resetForm();
//     // Optional: Zeige eine Testmodusmeldung im UI
//   }
// }
