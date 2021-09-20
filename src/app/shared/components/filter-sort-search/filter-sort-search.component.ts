import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-sort-search',
  templateUrl: './filter-sort-search.component.html',
  styleUrls: ['./filter-sort-search.component.scss']
})
export class FilterSortSearchComponent {
  /**
   * Boolean to determine on which page is component
   */
  @Input() deals = false;
  @Input() dealsInsights = false;
}
