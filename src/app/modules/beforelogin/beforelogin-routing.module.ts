import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitpageComponent } from 'src/app/modules/beforelogin/initpage/initpage.component';
import { RouterModule } from '@angular/router';


const routes=[
  {
    path:'',
    component:InitpageComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BeforeloginRoutingModule { }
