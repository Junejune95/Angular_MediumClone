import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavcolordefineDirective } from 'src/app/shared/directives/navcolordefine.directive';



@NgModule({
  declarations: [
    NavcolordefineDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavcolordefineDirective
  ]
})
export class SharedModule { }
