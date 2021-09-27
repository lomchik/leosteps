import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tension-before-test',
  templateUrl: './tension-before-test.page.html',
  styleUrls: ['./tension-before-test.page.scss'],
})
export class TensionBeforeTestPage implements OnInit {

  value: string;

  constructor(
    private navigation: NavController
  ) { }

  ngOnInit() {
  }

  next() {
    localStorage.setItem('breathBeforeTest', this.value);
    this.navigation.navigateForward(['/test-run']);
  }
}
