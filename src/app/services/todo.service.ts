import { Injectable } from '@angular/core';

import { Todo } from '~/app/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  getTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo(todoId: number) {
    this.todos = this.todos.filter((todo) => todo.getId() !== todoId);
  }
}
