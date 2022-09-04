import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitpageComponent } from 'src/app/presentation/beforelogin/initpage/initpage.component';
import { RouterModule } from '@angular/router';


const routes = [
  {
    path: '',
    component: InitpageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home-components/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./ourstory-components/ourstory-components.module').then((m) => m.OurstoryComponentsModule)
      },
      {
        path: 'membership',
        loadChildren: () => import('./membership-components/membership-components.module').then((m) => m.MembershipComponentsModule)
      },
      {
        path: 'creators',
        loadChildren: () => import('./creator-components/creator-components.module').then((m) => m.CreatorComponentsModule)
      }
    ]
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
