import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'opening',
    pathMatch: 'full'
  },
  {
    path: 'opening',
    loadChildren: () => import('./openingPage/opening/opening.module').then( m => m.OpeningPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./createAccount/create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./signIn/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'interests',
    loadChildren: () => import('./interests/interests/interests.module').then( m => m.InterestsPageModule)
  },
  {
    path: 'whatisaltidea',
    loadChildren: () => import('./whatIsAltidea/whatisaltidea/whatisaltidea.module').then( m => m.WhatisaltideaPageModule)
  },
  {
    path: 'down-bar',
    loadChildren: () => import('./down-bar/down-bar.module').then( m => m.DownBarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
