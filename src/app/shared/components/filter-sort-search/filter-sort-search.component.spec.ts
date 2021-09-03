import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSortSearchComponent } from './filter-sort-search.component';

describe('FilterSortSearchComponent', () => {
  let component: FilterSortSearchComponent;
  let fixture: ComponentFixture<FilterSortSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSortSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSortSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
