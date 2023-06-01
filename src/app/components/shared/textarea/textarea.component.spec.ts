import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextareaComponent } from './textarea.component';
import { ButtonModule } from '~/components/shared/button/button.module';
import { DebugElement } from '@angular/core';

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;
  let nativeTextarea: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextareaComponent],
      imports: [FormsModule, ReactiveFormsModule, ButtonModule],
    });
    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    nativeTextarea = fixture.debugElement.query(By.css('textarea'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update formControl on value change', () => {
    const todoTitle = 'Do homework';
    nativeTextarea.nativeElement.value = todoTitle;
    nativeTextarea.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(component.textareaFormControl.value).toEqual(todoTitle);
  });

  it('should have the #required attribute', () => {
    expect(nativeTextarea.nativeElement.required).toBeTruthy();
  });

  it('should show error if no input provided', () => {
    const errorText = 'Field is required!';
    let errorElement = fixture.debugElement.query(By.css('.input-error'));
    let errorElementText = fixture.debugElement.query(By.css('.input-error p'));

    expect(errorElement).toBeFalsy();
    expect(errorElementText).toBeFalsy();

    nativeTextarea.nativeElement.value = '';
    nativeTextarea.nativeElement.dispatchEvent(new Event('input'));
    component.isFormSubmitted = true;

    fixture.detectChanges();

    errorElement = fixture.debugElement.query(By.css('.input-error'));
    errorElementText = fixture.debugElement.query(By.css('.input-error p'));

    expect(errorElement).toBeTruthy();
    expect(errorElementText.nativeNode.innerText).toEqual(errorText);
  });
});
