import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-test-feeling',
  templateUrl: './test-feeling.page.html',
  styleUrls: ['./test-feeling.page.scss'],
})
export class TestFeelingPage {

  value: 'no'|'yes';
  back: boolean;
  leg: boolean;
  other: string;

  constructor(
    private nav: NavController
  ) { }

  next() {
    let result = '';
    if (this.value === 'yes') {
      result = 'присутній';
      const pains = [];
      if (this.back) {
        pains.push('спині');
      }
      if (this.leg) {
        pains.push('нозі');
      }
      if (this.other) {
        pains.push(this.other);
      }
      if (pains.length) {
        result += ' в ' + pains.join(', ');
      }
    } else {
      result = 'відсутній';
    }
    localStorage.setItem('testPain', result);
    this.nav.navigateForward('results');
  }
}
