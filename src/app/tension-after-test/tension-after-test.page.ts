import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tension-after-test',
  templateUrl: './tension-after-test.page.html',
  styleUrls: ['./tension-after-test.page.scss'],
})
export class TensionAfterTestPage implements OnInit {

  value: string;

  constructor(
    private navigation: NavController
  ) { }

  ngOnInit() {
  }

  next() {
    localStorage.setItem('tensionAfterTest', this.value);
    this.navigation.navigateForward(['/test-feeling']);
  }
}
