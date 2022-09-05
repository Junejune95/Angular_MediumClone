import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TrendingWrapperComponent } from './trending-wrapper/trending-wrapper.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostWrapperComponent } from './post-wrapper/post-wrapper.component';
import { TypeFilterComponent } from './type-filter/type-filter.component';

const routes=[
  {
    path:'',
    component:HomeComponent
  }
]


@NgModule({
  declarations: [
    HomeComponent,
    TrendingWrapperComponent,
    PostWrapperComponent,
    TypeFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
