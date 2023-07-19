import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DailyIntakeModule } from '../components/daily-intake/daily-intake.module';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, DailyIntakeModule],
})
export class NutritionPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
