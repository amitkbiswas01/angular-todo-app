import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from '~/app/app.component';
import { NavbarModule } from '~/components/navbar/navbar.module';
import { MenuModule } from '~/components/menu/menu.module';
import { TodoListModule } from './components/todo-list/todo-list.module';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NavbarModule, MenuModule, TodoListModule],
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
