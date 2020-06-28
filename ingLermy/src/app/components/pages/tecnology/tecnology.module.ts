import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnologyRoutingModule } from './tecnology-routing.module';
import { TecnologyComponent } from './tecnology.component';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [TecnologyComponent],
  imports: [
    CommonModule,
    TecnologyRoutingModule,
    MaterialModule
  ]
})
export class TecnologyModule { }
