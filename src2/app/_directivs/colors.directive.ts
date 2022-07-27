import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective {
  @Input() appColors!: string
  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = this.appColors
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appColors;

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'blue'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'white'
  }
}
