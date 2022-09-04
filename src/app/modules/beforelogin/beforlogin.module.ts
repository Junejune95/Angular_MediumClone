import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InitpageComponent } from './initpage/initpage.component';
import { BeforeloginRoutingModule } from 'src/app/modules/beforelogin/beforelogin-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    InitpageComponent
  ],
  imports: [
    CommonModule,
    BeforeloginRoutingModule
  ]
})
export class BeforeloginModule { }
