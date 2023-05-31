import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

import { Todo } from '~/app/models/todo.model';
import { TodoService } from '~/app/services/todo.service';
import { TextareaComponent } from '~/components/shared/textarea/textarea.component';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  existingValue = '';
  isFormSubmitted = false;
  addTodoLabel = 'Add Todo';

  @Output() hideAddFormEvent = new EventEmitter();

  @ViewChild(TextareaComponent) textarea: TextareaComponent;

  constructor(private todoService: TodoService) {}

  onSubmit() {
    this.isFormSubmitted = true;
    if (
      !this.textarea.textareaFormControl.value?.trim() ||
      this.textarea.textareaFormControl.invalid
    ) {
      this.textarea.textareaFormControl.setValue('');
      return;
    }

    this.todoService.addTodo(
      new Todo(
        Date.now(),
        new Date(),
        null,
        this.textarea.textareaFormControl.value?.trim() as string,
        false
      )
    );

    this.isFormSubmitted = false;
    this.textarea.textareaFormControl.setValue('');
  }

  resetAddForm() {
    this.textarea.textareaFormControl.setValue('');
    this.hideAddFormEvent.emit();
  }
}
