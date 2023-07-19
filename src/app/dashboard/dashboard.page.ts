import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyTransformationCardModule } from '../components/my-transformation-card/my-transformation-card.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyTransformationCardModule],
})
export class DashboardPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
