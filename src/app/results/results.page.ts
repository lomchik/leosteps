import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  data = localStorage;
  shared = false;

  constructor(private nav: NavController) {
  }

  ngOnInit() {
  }

  send() {
    // @ts-ignore
    window.plugins.socialsharing.share(
      this.getStringData(),
      'Результати тесту ' + this.data['id']
    );
    this.shared = true;
  }

  getStringData() {
    return `
Індивідуальний номер: ${this.data['id']}
Перед тестуванням
  Пульс: ${this.data['heartRate']}
  Сатурація: ${this.data['saturation']}
  Віддишка: ${this.data['breathBeforeTest']}
  Втома: ${this.data['tensionBeforeTest']}
Тестування:
  Кроків: ${this.data['steps']}
  Біль: ${this.data['testPain']}
Після тестування:
  Пульс: ${this.data['heartRateAfter']}
  Сатурація: ${this.data['saturationAfter']}
  Віддишка: ${this.data['breathAfterTest']}
  Втома: ${this.data['tensionAfterTest']}
    `;
  }

  begin() {
    this.nav.navigateForward(['/']);
  }
}
