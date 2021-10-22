import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Stepcounter } from '@ionic-native/stepcounter/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({
    mode: 'ios'
  }), AppRoutingModule, MomentModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Stepcounter],
  bootstrap: [AppComponent],
})
export class AppModule {}
