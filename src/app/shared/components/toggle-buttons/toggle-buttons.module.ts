import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonsComponent } from './toggle-buttons.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ToggleButtonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ToggleButtonsComponent
  ]
})
export class ToggleButtonsModule { }
