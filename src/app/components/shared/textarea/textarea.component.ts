import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  template: `
    <textarea
      [formControl]="textareaFormControl"
      required
      appInputFocus
    ></textarea>
    <div *ngIf="showError()" class="input-error">
      <p *ngIf="textareaFormControl.errors?.['required']">{{ errorText }}</p>
    </div>
  `,
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  errorText = 'Field is required!';
  textareaFormControl = new FormControl('', [Validators.required]);

  @Input() isFormSubmitted = false;

  showError() {
    return (
      this.isFormSubmitted &&
      this.textareaFormControl.invalid &&
      (this.textareaFormControl.dirty || this.textareaFormControl.touched)
    );
  }
}
