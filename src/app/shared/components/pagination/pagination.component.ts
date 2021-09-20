import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Pagination } from './pagination';

@Component({
  selector: 'senscare-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  // * necu imati ovde ovako definisan pagination nego cu iz parent-a da saljem
  @Input() pagination: Pagination = {
    first: true,
    last: false,
    page: 1,
    size: 10,
    totalElements: 300,
    totalPages: 30
  };

  @Output() pageChange = new Subject<number>();

  // *ovaj ovde deo je samo tu za sad, trebalo bi da sve primio kroz pagination objekat
  currentPage: number = 1;
  // stavljam da je 100 po default-u
  @Input() totalPages: number = 100;

  // *ove metode ispod bi trebalo sve da se smeste u jednu metodu
  /**
   * Happens when we click on page number
   * @param {number} pageNumber
   * @memberof PaginationComponent
   */
  changePage(pageNumber: number): void {
    this.pageChange.next(pageNumber);
    this.currentPage = pageNumber;
  }

  /**
   * Method for showing all results
   * @memberof PaginationComponent
   */
  showAllResults(): void {
    // ovde cu poslati neki znak da prikaze sve
  }

}
