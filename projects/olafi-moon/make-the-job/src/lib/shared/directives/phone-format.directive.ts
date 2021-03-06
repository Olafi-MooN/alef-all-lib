import { Directive, HostListener } from '@angular/core';
import { mask } from '../utils/mask-inputs';

@Directive({
  selector: '[alefPhoneFormat]'
})
export class PhoneFormatDirective {

  constructor() { }

  @HostListener('input', ['$event']) cpfHostListener(e: any) {
    let element = e.target as HTMLInputElement;
    element.value = mask.phone(element.value);
    return element;
  }
}
