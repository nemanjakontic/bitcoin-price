import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInsightsComponent } from './card-insights.component';

describe('CardInsightsComponent', () => {
  let component: CardInsightsComponent;
  let fixture: ComponentFixture<CardInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
