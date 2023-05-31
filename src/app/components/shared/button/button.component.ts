import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonClass, ButtonType } from 'src/types/components';

@Component({
  selector: 'app-button',
  template: `
    <button
      [type]="buttonType"
      [class]="buttonClass"
      [attr.data-test-id]="testId"
      (click)="onClick()"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() testId = '';
  @Input() buttonType: ButtonType = 'button';
  @Input() buttonClass: ButtonClass = 'text-button';
  @Output() clickEvent = new EventEmitter();

  onClick() {
    this.clickEvent.emit();
  }
}
