import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[atex-card-avatar]'
})
export class CardAvatarDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.height = '40px';
    element.nativeElement.style.width = '40px';
    element.nativeElement.style.borderRadius = '50%';
    element.nativeElement.style.flexShrink = '0';
    element.nativeElement.style.backgroundSize = 'cover';
  }

}
