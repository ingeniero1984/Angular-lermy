import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnologyComponent } from './tecnology.component';

const routes: Routes = [{ path: '', component: TecnologyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnologyRoutingModule { }
