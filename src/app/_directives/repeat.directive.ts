import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {
  @Input() appRepeat: number = 1;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    for (let index = 0; index < this.appRepeat; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
