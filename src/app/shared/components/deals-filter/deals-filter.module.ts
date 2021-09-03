import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsFilterComponent } from './deals-filter.component';



@NgModule({
  declarations: [
    DealsFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DealsFilterComponent
  ]
})
export class DealsFilterModule { }
