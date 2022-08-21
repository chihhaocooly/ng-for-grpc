import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './canvas.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CanvasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component:CanvasComponent
      }

    ])
  ]
})
export class CanvasModule { }
