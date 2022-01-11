import { Directive, HostListener } from '@angular/core';
import { mask } from '../utils/mask-inputs';

@Directive({
  selector: '[alefKeyboardMouseLockFormat]'
})
export class KeyboardMouseLockFormatDirective {

  constructor() { }

  @HostListener('input', ['$event']) cpfHostListener(e: any) {
    e.preventDefault();
  }
}
