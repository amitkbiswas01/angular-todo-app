import { By } from '@angular/platform-browser';
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

  it('should run #onSubmit on form submit', () => {
    const submitButton = fixture.debugElement.query(
      By.css('[data-test-id="add-todo-btn"]')
    );
    const submitSpy = spyOn(component, 'onSubmit');

    component.textarea.textareaFormControl.setValue('Go to sleep');
    submitButton.nativeElement.click();
    fixture.detectChanges();

    expect(submitSpy).toHaveBeenCalled();
  });

  it('should run #resetAddForm on reset', () => {
    const resetButton = fixture.debugElement.query(
      By.css('[data-test-id="reset-todo-btn"]')
    );
    const resetSpy = spyOn(component, 'resetAddForm');

    component.textarea.textareaFormControl.setValue('Go to sleep');
    resetButton.nativeElement.click();
    fixture.detectChanges();

    expect(resetSpy).toHaveBeenCalled();
  });

  it('should hide add form on reset', () => {
    const resetButton = fixture.debugElement.query(
      By.css('[data-test-id="reset-todo-btn"]')
    );
    const emitSpy = spyOn(component.hideAddFormEvent, 'emit');

    component.textarea.textareaFormControl.setValue('Go to sleep');
    resetButton.nativeElement.click();
    fixture.detectChanges();

    expect(emitSpy).toHaveBeenCalled();
  });
});
