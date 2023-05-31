import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { ButtonModule } from '~/components/shared/button/button.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, ButtonModule],
  exports: [MenuComponent],
})
export class MenuModule {}
