import { Component } from '@angular/core';
import { merge, Subscription, timer } from 'rxjs';
import { last, mergeMapTo, take, takeWhile, tap } from 'rxjs/operators';
import { PedometerService } from '../services/pedometer.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  steps = 0;
  timer: number;
  testTime = 60*1000;
  startSubscription: Subscription;

  constructor(
    private pedometer: PedometerService
  ) {

  }

  start() {
    this.startSubscription = merge(
      this.startPedometer(),
      this.startTimer().pipe(last(), tap(() => this.stop()))
    ).subscribe();
  }

  stop() {
    console.log('stopped');
    this.pedometer.stop();
    this.startSubscription.unsubscribe();
  }

  private startPedometer() {
    this.steps = 0;
    return this.pedometer.start()
    .pipe(
      tap((data) => this.steps = data.numberOfSteps)
    );
  }

  private startTimer() {
    this.timer = this.testTime;
    return timer(1000, 1000)
    .pipe(
      tap(() => { this.timer -= 1000; }),
      takeWhile(n => this.timer>0)
    );
  }
}
