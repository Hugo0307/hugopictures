import { Component, Input } from '@angular/core';

@Component({
  selector: 'hp-vmessage',
  templateUrl: './vmessage.component.html'
})
export class VMessageComponent {

  @Input() text = '';
}
