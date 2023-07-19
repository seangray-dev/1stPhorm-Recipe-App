import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-transformation-card',
  templateUrl: './my-transformation-card.component.html',
  styleUrls: ['./my-transformation-card.component.scss'],
})
export class MyTransformationCardComponent implements OnInit {
  showDays = false;
  weeks: number[][] = Array.from({ length: 8 }, (_, i) =>
    Array.from({ length: 7 }, (_, j) => i * 7 + j + 1)
  );
  currentDay!: number;

  constructor() {}

  ngOnInit() {
    this.currentDay = this.getChallengeDay(new Date('2023-07-10'));
  }

  toggleDays() {
    this.showDays = !this.showDays;
  }

  getChallengeDay(startDate: Date): number {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
  }
}
