import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InitpageComponent } from './initpage/initpage.component';
import { BeforeloginRoutingModule } from 'src/app/presentation/beforelogin/beforelogin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    InitpageComponent
  ],
  imports: [
    CommonModule,
    BeforeloginRoutingModule,
    RouterModule,
 
  ]
})
export class BeforeloginModule { }
