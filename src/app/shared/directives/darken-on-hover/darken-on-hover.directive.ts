import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[apDarkenOnHover]'//selector entre colchetes para poder usar a diretiva como atributo
})
export class DarkenOnHoverDirective {

  @Input() brightness = '70%';//tem 70% como default, mas pode receber do template qualquer valor como parâmetro no atributo da diretiva

  constructor(
    private el: ElementRef,
    private render: Renderer2
  ) { }

  @HostListener('mouseover')
  darkenOn() {
    this.render.setStyle(this.el.nativeElement, 'filter', `Brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setStyle(this.el.nativeElement, 'filter', `Brightness(100%)`);
  }
}
