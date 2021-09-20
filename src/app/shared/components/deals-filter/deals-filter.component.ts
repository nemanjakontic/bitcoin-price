import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'senscare-deals-filter',
  templateUrl: './deals-filter.component.html',
  styleUrls: ['./deals-filter.component.scss']
})
export class DealsFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleOpen = false;

  /**
   * Toggling card opening
   */
  toggleFilter(): void {
    document.getElementById('deals-filter__bottom')?.classList.toggle('deals-filter__show');
    this.toggleOpen = !this.toggleOpen;
  }

}
