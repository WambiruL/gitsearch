import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEntetr(){
    this.highlight('cyan');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('white');
  }

  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }

}
