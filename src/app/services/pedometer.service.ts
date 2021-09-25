import { Injectable } from '@angular/core';
import { IPedometerData, Pedometer } from '@ionic-native/pedometer/ngx';
import { Platform } from '@ionic/angular';
import { of } from 'rxjs';


@Injectable({providedIn: 'root'})
export class PedometerService {
  private pedometer: Pedometer;

  constructor(private platform: Platform) {
    this.pedometer = new Pedometer();
    console.log(this.isAvailable());
  }

  async isAvailable() {
    return await this.pedometer.isStepCountingAvailable();
  }

  start() {
    if (this.platform.is('cordova')) {
      return this.pedometer.startPedometerUpdates();
    }
    return of({numberOfSteps: 23} as IPedometerData);
  }

  stop() {
    if (this.platform.is('cordova')) {
      return this.pedometer.stopPedometerUpdates();
    }
    return;
  }
}
