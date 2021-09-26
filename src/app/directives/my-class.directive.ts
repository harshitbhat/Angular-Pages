import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyClass]',
})
export class MyClassDirective {
  constructor(private element: ElementRef) {}

  @Input('appMyClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
