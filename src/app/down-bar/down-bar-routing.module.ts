import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownBarPage } from './down-bar.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: DownBarPage,
    children: [
      {path: 'home',
      children:[
        {
          path:'',
          loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
        }
      ]
      },
      {
        path:'add',
        children:[
          {
            path:'',
            loadChildren: () => import('./add/add.module').then(m => m.AddPageModule)
          }
        ]
      },
      {
        path:'notifications',
        children:[
          {
            path:'',
            loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
          }
        ]
      },
      {
        path:'profile',
        children:[
          {
            path:'',
            loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path:'preferences',
        children:[
          {
            path:'',
            loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo: 'home',
      pathMatch: 'full'
  
      }
    ],
  },
  {
    path:'',
    redirectTo: './down-bar/tabs/home',
    pathMatch: 'full'
  }
];
 
 /* },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'preferences',
    loadChildren: () => import('./preferences/preferences.module').then( m => m.PreferencesPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
];*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownBarPageRoutingModule {}
