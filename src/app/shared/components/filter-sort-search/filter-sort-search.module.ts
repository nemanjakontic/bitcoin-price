import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterSortSearchComponent } from './filter-sort-search.component';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { FilterDirective } from './filter.directive';



@NgModule({
  declarations: [
    FilterSortSearchComponent,
    FilterDirective
  ],
  imports: [
    CommonModule,
    SearchBarModule
  ],
  exports: [
    FilterSortSearchComponent,
    FilterDirective
  ]
})
export class FilterSortSearchModule { }
