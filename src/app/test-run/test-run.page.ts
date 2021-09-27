import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { merge } from 'rxjs';
import { Subscription, timer } from 'rxjs';
import { last, tap, takeWhile } from 'rxjs/operators';
import { PedometerService } from '../services/pedometer.service';

@Component({
  selector: 'app-test-run',
  templateUrl: './test-run.page.html',
  styleUrls: ['./test-run.page.scss'],
})
export class TestRunPage implements OnInit {
  steps = 0;
  timer: number;
  testTime = 6*1000;
  startSubscription: Subscription;
  status: 'started'|'none'|'completed' = 'none';

  constructor(
    private pedometer: PedometerService,
    private nav: NavController
  ) {

  }
  ngOnInit() {
  }

  start() {
    this.status = 'started';
    this.startSubscription = merge(
      this.startPedometer(),
      this.startTimer().pipe(last(), tap(() => this.stop()))
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

  private startTimer() {
    this.timer = this.testTime;
    return timer(1000, 1000)
    .pipe(
      tap(() => { this.timer -= 1000; }),
      takeWhile(n => this.timer>0)
    );
  }
}
