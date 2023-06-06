import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { Todo } from '~/app/models/todo.model';
import { TodoService } from '~/app/services/todo.service';
import { ButtonModule } from '~/components/shared/button/button.module';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let todoService: TodoService;

  beforeEach(() => {
    const todoSpy = jasmine.createSpyObj('TodoService', ['deleteTodo']);

    TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
      imports: [ButtonModule],
      providers: [{ provide: TodoService, useValue: todoSpy }],
    });

    fixture = TestBed.createComponent(TodoItemComponent);
    todoService = TestBed.inject(TodoService);
    component = fixture.componentInstance;

    component.todo = new Todo(
      Date.now(),
      new Date(),
      null,
      'Go to market',
      false
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show correct title and date', () => {
    const title = fixture.debugElement.query(By.css('.title'));
    const date = fixture.debugElement.query(By.css('.date'));

    expect(title.nativeElement.innerText).toEqual(component.todo.getTitle());
    expect(date.nativeElement.innerText).toEqual(
      'Created at: ' + component.todo.getCreatedAt().toLocaleDateString()
    );
  });

  it('should call #deleteTodo from #todoService', () => {
    const deleteButton = fixture.debugElement.query(
      By.css('[data-test-id="delete-todo-btn"]')
    );

    deleteButton.triggerEventHandler('click');
    fixture.detectChanges();

    expect(todoService.deleteTodo).toHaveBeenCalled();
  });
});
