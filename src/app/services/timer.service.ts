import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable, timer } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TimerService {
  constructor(private platform: Platform) {

  }


  startTimer(time: number) {
    if (this.platform.is('cordova')) {
      return this.cordovaStartTimer(time);
    } else {
      return this.browserStartTimer(time);
    }
  }

  private browserStartTimer(time: number) {
    let left = time;
    return timer(1000, 1000)
    .pipe(
      tap(() => { left -= 1000; }),
      takeWhile(n => left >0),
      map(() => left)
    );
  }

  private cordovaStartTimer(time: number) {
    const nativeTimer = new (window as any).nativeTimer();
    let left = time;
    return new Observable<number>((observer) => {
      nativeTimer.onTick = (tick) => {
        left -= 1000;
        observer.next(left);
        if (left <=0 ) {
          nativeTimer.stop();
          observer.complete();
        }
      };
      nativeTimer.start(1, 1000, () => console.log('timer started'), () => console.log('timer failed'));
      return () => nativeTimer.stop();
    });
  }
}
