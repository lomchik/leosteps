import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-enter-heart-rate-after',
  templateUrl: './enter-heart-rate-after.page.html',
  styleUrls: ['./enter-heart-rate-after.page.scss'],
})
export class EnterHeartRateAfterPage implements OnInit {
  rate: number;

  constructor(
    private navigation: NavController
    ) { }

  ngOnInit() {
  }

  next() {
    localStorage.setItem('heartRateAfter', this.rate.toString());
    this.navigation.navigateForward(['/enter-saturation-after']);
  }
}
