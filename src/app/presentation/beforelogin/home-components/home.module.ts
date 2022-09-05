import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TrendingWrapperComponent } from './trending-wrapper/trending-wrapper.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes=[
  {
    path:'',
    component:HomeComponent
  }
]


@NgModule({
  declarations: [
    HomeComponent,
    TrendingWrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
