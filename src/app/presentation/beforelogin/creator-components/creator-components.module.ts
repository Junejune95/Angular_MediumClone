import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorComponent } from './creator/creator.component';
import { RouterModule } from '@angular/router';


const routes=[
  {
    path:'',
    component:CreatorComponent
  }
]


@NgModule({
  declarations: [
    CreatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CreatorComponentsModule { }
