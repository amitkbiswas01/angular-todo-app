import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextareaComponent } from './textarea.component';
import { ButtonModule } from '~/components/shared/button/button.module';

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextareaComponent],
      imports: [FormsModule, ReactiveFormsModule, ButtonModule],
    });
    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
