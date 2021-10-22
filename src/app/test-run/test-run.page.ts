import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { merge, of } from 'rxjs';
import { Subscription, timer } from 'rxjs';
import { last, tap, takeWhile, catchError } from 'rxjs/operators';
import { PedometerService } from '../services/pedometer.service';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-test-run',
  templateUrl: './test-run.page.html',
  styleUrls: ['./test-run.page.scss'],
})
export class TestRunPage implements OnInit {
  steps = 0;
  timer: number;
  testTime = 6*60*1000;
  startSubscription: Subscription;
  status: 'none'|'started'|'completed' = 'none';
  accepted = false;

  constructor(
    private pedometer: PedometerService,
    private nav: NavController,
    private timerService: TimerService
  ) {

  }
  async ngOnInit() {
    try {
      await this.pedometer.start().toPromise();
      await this.pedometer.stop();
    } catch (err){}
  }

  start() {
    this.status = 'started';
    this.startSubscription = merge(
      this.startPedometer(),
      this.timerService.startTimer(this.testTime)
        .pipe(
          tap((left) => { this.timer = left; }),
          last(),
          tap(() => this.stop())
        )
    ).subscribe();
  }

  stop() {
    (navigator as any).notification?.beep(1);
    this.status = 'completed';
    this.pedometer.stop();
    this.startSubscription.unsubscribe();
  }

  next() {
    localStorage.setItem('steps', this.steps.toString());
    this.nav.navigateForward('enter-heart-rate-after');
  }

  private startPedometer() {
    this.steps = 0;
    return this.pedometer.start()
    .pipe(
      tap(data => console.log(data)),
      tap((data) => this.steps = data),
      catchError(err => {
        alert(JSON.stringify(err));
        return of();
      })
    );
  }

}
