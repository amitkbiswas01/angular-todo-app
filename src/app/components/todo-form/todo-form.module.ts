import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';
import { ButtonModule } from '~/components//shared/button/button.module';
import { TextareaModule } from '~/components//shared/textarea/textarea.module';

@NgModule({
  declarations: [TodoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TextareaModule,
  ],
  exports: [TodoFormComponent],
})
export class TodoFormModule {}
