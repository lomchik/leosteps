import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-enter-saturation',
  templateUrl: './enter-saturation.page.html',
  styleUrls: ['./enter-saturation.page.scss'],
})
export class EnterSaturationPage implements OnInit {

  value: number;


  constructor(
    private navigation: NavController
  ) { }

  ngOnInit() {
  }

  next() {
    localStorage.setItem('saturation', this.value.toString());
    this.navigation.navigateForward(['/breath-before-test']);
  }
}
