import { Injectable } from '@angular/core';

import { Todo } from '~/app/models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    new Todo(Date.now() + 1, new Date(), null, 'Go to market', false),
    new Todo(Date.now() + 2, new Date(), null, 'Complete chores', false),
    new Todo(Date.now() + 3, new Date(), null, 'Study for exam', false),
  ];

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
