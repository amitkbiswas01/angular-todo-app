import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';
import { ButtonModule } from '~/components/shared/button/button.module';
import { TextareaModule } from '~/components/shared/textarea/textarea.module';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [FormsModule, ReactiveFormsModule, ButtonModule, TextareaModule],
    });
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
