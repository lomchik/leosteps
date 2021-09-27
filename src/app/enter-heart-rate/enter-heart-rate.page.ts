import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-enter-heart-rate',
  templateUrl: './enter-heart-rate.page.html',
  styleUrls: ['./enter-heart-rate.page.scss'],
})
export class EnterHeartRatePage implements OnInit {
  rate: number;

  constructor(
    private navigation: NavController
    ) { }

  ngOnInit() {
  }

  next() {
    localStorage.setItem('heartRate', this.rate.toString());
    this.navigation.navigateForward(['/enter-saturation']);
  }

}
