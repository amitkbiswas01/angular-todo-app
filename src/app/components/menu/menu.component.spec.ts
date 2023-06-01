import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NgModule } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MenuComponent } from './menu.component';
import { MenuModule } from './menu.module';
import { ButtonComponent } from '~/app/components/shared/button/button.component';

// wrapper component to test emit
@Component({
  selector: 'app-wrapper-component',
  template: `
    <app-menu
      [isAddTodoFormVisible]="isAddTodoFormVisible"
      (updateAddTodoFormVisibility)="updateAddTodoFormVisibility($event)"
    ></app-menu>
  `,
})
export class WrapperComponent {
  isAddTodoFormVisible = false;

  updateAddTodoFormVisibility(updatedVisibility: boolean) {
    this.isAddTodoFormVisible = updatedVisibility;
  }
}

@NgModule({
  declarations: [WrapperComponent],
  imports: [MenuModule],
})
export class WrapperModule {}

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
      By.css('[data-test-id="add-todo-btn"]')
    );
    button.triggerEventHandler('click', null);

    expect(component.showAddTodoForm).toHaveBeenCalled();
  });
});

describe('MenuComponent Emit', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrapperComponent],
      imports: [MenuModule],
    });

    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit toggled value of #isAddTodoFormVisible', () => {
    component.isAddTodoFormVisible = false;
    const button = fixture.nativeElement.querySelector('button');

    button.dispatchEvent(new Event('click'));
    expect(component.isAddTodoFormVisible).toBeTrue();
  });
});
