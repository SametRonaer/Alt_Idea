import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownBarPageRoutingModule } from './down-bar-routing.module';

import { DownBarPage } from './down-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownBarPageRoutingModule
  ],
  declarations: [DownBarPage]
})
export class DownBarPageModule {}
