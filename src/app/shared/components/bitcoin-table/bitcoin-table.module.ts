import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitcoinTableComponent } from './bitcoin-table.component';


@NgModule({
  declarations: [
    BitcoinTableComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BitcoinTableComponent
  ]
})
export class BitcoinTableModule { }
