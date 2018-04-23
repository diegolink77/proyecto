import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoRegistroPage } from './nuevo-registro';

@NgModule({
  declarations: [
    NuevoRegistroPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoRegistroPage),
  ],
})
export class NuevoRegistroPageModule {}
