import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextareaComponent } from './textarea.component';
import { InputFocusDirective } from '~/app/directives/input-focus/input-focus.directive';

@NgModule({
  declarations: [TextareaComponent, InputFocusDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TextareaComponent],
})
export class TextareaModule {}
