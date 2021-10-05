import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-enter-saturation-after',
  templateUrl: './enter-saturation-after.page.html',
  styleUrls: ['./enter-saturation-after.page.scss'],
})
export class EnterSaturationAfterPage implements OnInit {

  value: number;


  constructor(
    private navigation: NavController
  ) { }

  ngOnInit() {
  }

  next() {
    localStorage.setItem('saturationAfter', this.value.toString());
    this.navigation.navigateForward(['/breath-after-test']);
  }

}
