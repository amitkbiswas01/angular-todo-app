import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '~/app/models/todo.model';
import { TodoService } from '~/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  @Input() isAddTodoFormVisible = false;
  @Output() updateAddTodoFormVisibility = new EventEmitter<boolean>();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  trackByFn(_index: number, todo: Todo) {
    return todo.getId();
  }

  hideAddForm() {
    this.updateAddTodoFormVisibility.emit(!this.isAddTodoFormVisible);
  }
}
