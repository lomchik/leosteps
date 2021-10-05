import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-breath-after-test',
  templateUrl: './breath-after-test.page.html',
  styleUrls: ['./breath-after-test.page.scss'],
})
export class BreathAfterTestPage implements OnInit {

  value: string;

  constructor(
    private navigation: NavController
  ) { }

  ngOnInit() {
  }

  next() {
    localStorage.setItem('breathAfterTest', this.value);
    this.navigation.navigateForward(['/tension-after-test']);
  }
}
