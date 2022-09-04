import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership/membership.component';
import { RouterModule } from '@angular/router';


const routes=[
  {
    path:'',
    component:MembershipComponent
  }
]

@NgModule({
  declarations: [
    MembershipComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MembershipComponentsModule { }
