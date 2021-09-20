import { ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { TooltipDirective } from './tooltip.directive';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

describe('TooltipDirective', () => {
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
      const directive = new TooltipDirective(renderer, el, ref);
      expect(directive).toBeTruthy();
    }
  ));
});
