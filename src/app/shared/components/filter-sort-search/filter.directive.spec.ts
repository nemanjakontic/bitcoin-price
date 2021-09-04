import { ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FilterDirective } from './filter.directive';

describe('FilterDirective', () => {
  it('should create an instance', inject(
    [ElementRef, Renderer2, ViewContainerRef],
    (el: ElementRef, renderer: Renderer2, ref: ViewContainerRef) => {
      const directive = new FilterDirective(renderer, el, ref);
      expect(directive).toBeTruthy();
    }
  ));
});
