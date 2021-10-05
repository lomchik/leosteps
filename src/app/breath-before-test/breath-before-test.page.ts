import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-breath-before-test',
  templateUrl: './breath-before-test.page.html',
  styleUrls: ['./breath-before-test.page.scss'],
})
export class BreathBeforeTestPage implements OnInit {

  value: string;

  constructor(
    private navigation: NavController
  ) { }

  ngOnInit() {
  }

  next() {
    localStorage.setItem('breathBeforeTest', this.value);
    this.navigation.navigateForward(['/tension-before-test']);
  }
}
