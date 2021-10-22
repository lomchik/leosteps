import { Injectable } from '@angular/core';
import { IPedometerData, Pedometer } from '@ionic-native/pedometer/ngx';
import { Platform } from '@ionic/angular';
import { from, of, timer } from 'rxjs';
import { Stepcounter } from '@ionic-native/stepcounter/ngx';
import { last, map, switchMap, tap } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class PedometerService {
  private pedometer: Pedometer;

  constructor(private platform: Platform, private stepcounter: Stepcounter) {
    this.pedometer = new Pedometer();
    console.log(this.isAvailable());
  }

  async isAvailable() {
    return await this.stepcounter.deviceCanCountSteps();
  }

  _start() {
    return from(this.stepcounter.start(0))
    .pipe(
      switchMap(() => timer(0, 1000).pipe(
        switchMap(() => this.stepcounter.getStepCount())
      )),
      tap(() => console.log(this.stepcounter.getHistory()))
    );
  }

  _stop() {
    this.stepcounter.stop();
  }

  start() {
    if (this.platform.is('cordova')) {
      return this.pedometer.startPedometerUpdates()
      .pipe(
        map(data => data.numberOfSteps)
      );
    }
    return of(23);
  }

  stop() {
    if (this.platform.is('cordova')) {
      return this.pedometer.stopPedometerUpdates();
    }
    return;
  }
}
