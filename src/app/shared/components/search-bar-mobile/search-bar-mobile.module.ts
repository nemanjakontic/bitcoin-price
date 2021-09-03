import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarMobileComponent } from './search-bar-mobile.component';
import { SearchBarModule } from '../search-bar/search-bar.module';

@NgModule({
  declarations: [
    SearchBarMobileComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule
  ],
  exports: [
    SearchBarMobileComponent
  ]
})
export class SearchBarMobileModule { }
