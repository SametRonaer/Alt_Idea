import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatisaltideaPageRoutingModule } from './whatisaltidea-routing.module';

import { WhatisaltideaPage } from './whatisaltidea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatisaltideaPageRoutingModule
  ],
  declarations: [WhatisaltideaPage]
})
export class WhatisaltideaPageModule {}
