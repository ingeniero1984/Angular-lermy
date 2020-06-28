import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const myModule = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule
 ];

@NgModule({
  declarations: [],
  imports: [CommonModule, myModule],
  exports: [myModule]
})
export class MaterialModule { }
