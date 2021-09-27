import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { merge } from 'rxjs';
import { Subscription, timer } from 'rxjs';
import { last, tap, takeWhile } from 'rxjs/operators';
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
  testTime = 1*60*1000;
  startSubscription: Subscription;
  status: 'none'|'started'|'completed' = 'none';
  accepted = false;

  constructor(
    private pedometer: PedometerService,
    private nav: NavController,
    private timerService: TimerService
  ) {

  }
  ngOnInit() {
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
    this.status = 'completed';
    this.pedometer.stop();
    this.startSubscription.unsubscribe();
  }

  next() {
    localStorage.setItem('steps', this.steps.toString());
    this.nav.navigateForward('steps');
  }

  private startPedometer() {
    this.steps = 0;
    return this.pedometer.start()
    .pipe(
      tap((data) => this.steps = data.numberOfSteps)
    );
  }

}
