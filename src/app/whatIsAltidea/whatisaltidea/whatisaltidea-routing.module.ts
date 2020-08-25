import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatisaltideaPage } from './whatisaltidea.page';

const routes: Routes = [
  {
    path: '',
    component: WhatisaltideaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatisaltideaPageRoutingModule {}
