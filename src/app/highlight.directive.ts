import { Directive,Renderer2,ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  
  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,"backgroundColor","lightblue");
    this.renderer.addClass(this.element.nativeElement,"container");
    this.renderer.setAttribute(this.element.nativeElement,'title','this is a example');
  }

}