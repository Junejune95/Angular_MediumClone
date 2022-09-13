import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes=[
  {
    path:'',
    component:OurstoryComponent
  }
]

@NgModule({
  declarations: [
    OurstoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule,

  ]
})
export class OurstoryComponentsModule { }
