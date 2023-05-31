import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MenuComponent } from './menu.component';
import { ButtonComponent } from '~/app/components/shared/button/button.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent, ButtonComponent],
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run `showAddTodoForm` when add todo button clicked', () => {
    spyOn(component, 'showAddTodoForm');

    const button = fixture.debugElement.query(
      By.css('[data-test-id="create-todo-btn"]')
    );
    button.triggerEventHandler('click', null);

    expect(component.showAddTodoForm).toHaveBeenCalled();
  });
});
