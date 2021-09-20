import { ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { FilterDirective } from './filter.directive';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

describe('FilterDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ElementRef, useClass: MockElementRef },
        Renderer2,
        ViewContainerRef
      ]
    }).compileComponents();
  });

  it('should create an instance', inject(
    [ElementRef, Renderer2, ViewContainerRef],
    (el: ElementRef, renderer: Renderer2, ref: ViewContainerRef) => {
      const directive = new FilterDirective(renderer, el, ref);
      expect(directive).toBeTruthy();
    }
  ));
});
