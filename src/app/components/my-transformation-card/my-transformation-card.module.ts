import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MyTransformationCardComponent } from './my-transformation-card.component';

@NgModule({
  declarations: [MyTransformationCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [MyTransformationCardComponent],
})
export class MyTransformationCardModule {}
