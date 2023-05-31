import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaComponent } from './textarea.component';
import { InputFocusDirective } from '~/app/directives/input-focus/input-focus.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextareaComponent, InputFocusDirective],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TextareaComponent],
})
export class TextareaModule {}
