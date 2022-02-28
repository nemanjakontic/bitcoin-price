import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinTableComponent } from './bitcoin-table.component';

describe('BitcoinTableComponent', () => {
  let component: BitcoinTableComponent;
  let fixture: ComponentFixture<BitcoinTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitcoinTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
