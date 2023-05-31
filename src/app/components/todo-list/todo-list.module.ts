import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoFormModule } from '../todo-form/todo-form.module';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, TodoFormModule],
  exports: [TodoListComponent],
})
export class TodoListModule {}