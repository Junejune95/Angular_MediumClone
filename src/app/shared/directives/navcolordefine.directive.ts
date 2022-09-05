import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[navcolordefine]'
})
export class NavcolordefineDirective {
  @Input() navcolordefine = '';
  
  constructor(private el: ElementRef) {
   }

  @HostListener('scroll', ['$event']) onScroll($event:any) {
    if($event.currentTarget.scrollTop > 460){
      this.el.nativeElement.childNodes[0].style.backgroundColor = 'white';
    }else{
      this.el.nativeElement.childNodes[0].style.backgroundColor = this.navcolordefine;

    }
  }

}
