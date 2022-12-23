import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbaButtonComponent } from './alba-button.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AlbaButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    AlbaButtonComponent
  ]
})
export class AlbaButtonModule { }
