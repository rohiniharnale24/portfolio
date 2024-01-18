import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appRepeatArray]',
})
export class RepeatArrayDirective {
  displaySkills: Array<string> = ['Web Developer', 'Angular Developer'];
  constructor() {}
  repeatElements() {
    for (let i = 0; i < this.displaySkills.length; i++) {
      if (this.displaySkills.length - 1) {
      }
    }
  }
}
