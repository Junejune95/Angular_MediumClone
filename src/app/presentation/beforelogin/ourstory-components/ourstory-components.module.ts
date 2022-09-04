import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { RouterModule } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class OurstoryComponentsModule { }
