import { ContentChild, Directive, ElementRef, HostListener, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFilter]'
})
export class FilterDirective {
  isOpen: boolean = false;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) { }

  @ContentChild('filterTemplate') private filterTemplateRef!: TemplateRef<Object>;

  // this is for click
  // @HostListener('click', ['$event']) onMouseClick(): void {
  //   if (this.isOpen) {
  //     if (this.viewContainerRef) {
  //       this.viewContainerRef.clear();
  //     }
  //   } else {
  //     const view = this.viewContainerRef.createEmbeddedView(this.filterTemplateRef);
  //     view.rootNodes.forEach(node => this.renderer.appendChild(this.elementRef.nativeElement, node));
  //   }
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('mouseenter') onMouseEnter(): void {
    const view = this.viewContainerRef.createEmbeddedView(this.filterTemplateRef);
    view.rootNodes.forEach(node => this.renderer.appendChild(this.elementRef.nativeElement, node));
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
    }
  }

}
