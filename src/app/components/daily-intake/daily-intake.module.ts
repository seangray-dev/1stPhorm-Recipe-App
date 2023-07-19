import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DailyIntakeComponent } from './daily-intake.component';

@NgModule({
  declarations: [DailyIntakeComponent],
  imports: [CommonModule, IonicModule],
  exports: [DailyIntakeComponent],
})
export class DailyIntakeModule {}
