import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[atex-card-image]'
})
export class CardImageDirective implements AfterViewInit{

  constructor(public element: ElementRef) {
    this.element.nativeElement.style.width = '100%';
    this.element.nativeElement.style.marginBottom = '.5rem';
  }

  ngAfterViewInit() {
    const parentFirstChild = this.element.nativeElement.parentElement.children[0];

    if (parentFirstChild.tagName.toLocaleLowerCase() === 'img') {
      this.element.nativeElement.style.borderTopLeftRadius = '4px';
      this.element.nativeElement.style.borderTopRightRadius = '4px';
    }
  }

}
