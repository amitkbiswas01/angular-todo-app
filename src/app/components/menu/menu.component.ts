import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  createButtonLabel = 'Create';

  @Input() isAddTodoFormVisible = false;
  @Output() updateAddTodoFormVisibility = new EventEmitter<boolean>();

  showAddTodoForm() {
    this.updateAddTodoFormVisibility.emit(!this.isAddTodoFormVisible);
  }
}
