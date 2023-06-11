import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutAuthComponent } from './layout-auth.component';

@NgModule({
  declarations: [LayoutAuthComponent],
  imports: [CommonModule, RouterModule],
  exports: [LayoutAuthComponent],
})
export class LayoutAuthModule {}
