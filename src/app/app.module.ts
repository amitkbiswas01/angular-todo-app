import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '~/app/app.component';
import { AppRoutingModule } from '~/app/app-routing.module';
import { NavbarModule } from '~/components/navbar/navbar.module';
import { MenuModule } from '~/components/menu/menu.module';
import { TodoListModule } from '~/components/todo-list/todo-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    MenuModule,
    TodoListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
