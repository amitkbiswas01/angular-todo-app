import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item.component';
import { ButtonModule } from '../shared/button/button.module';

@NgModule({
  declarations: [TodoItemComponent],
  imports: [CommonModule, ButtonModule],
  exports: [TodoItemComponent],
})
export class TodoItemModule {}
