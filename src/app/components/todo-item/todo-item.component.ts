import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '~/app/models/todo.model';
import { TodoService } from '~/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() classes = '';

  @Output() deleteEvent = new EventEmitter();

  constructor(private todoService: TodoService) {}

  deleteTodo() {
    this.todoService.deleteTodo(this.todo.getId());
    this.deleteEvent.emit();
  }
}
