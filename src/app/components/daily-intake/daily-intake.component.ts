import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-daily-intake',
  templateUrl: './daily-intake.component.html',
  styleUrls: ['./daily-intake.component.scss'],
})
export class DailyIntakeComponent implements OnInit {
  @Output() dailyIntakeChange = new EventEmitter<any>();
  @Output() dateChange = new EventEmitter<Date>();

  currentDate: Date = new Date();
  dailyIntake: any = {
    calories: 2000,
    protein: 150,
    carbs: 250,
    fats: 70,
    fiber: 30,
    water: 2000,
  };

  constructor() {}

  ngOnInit() {
    this.emitChanges();
  }

  // Call this method whenever the daily intake or date changes
  emitChanges() {
    this.dailyIntakeChange.emit(this.dailyIntake);
    this.dateChange.emit(this.currentDate);
  }

  changeDate(amount: number) {
    this.currentDate.setDate(this.currentDate.getDate() + amount);
    this.emitChanges();
  }

  // Add methods here to change the daily intake,
  // remember to call this.emitChanges() after updating the daily intake
}
