import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // 匯入 AppRoutingModule

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { MinutesSecondsPipe } from './timer/minutes-seconds.pipe'; // 匯入 MinutesSecondsPipe

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    MinutesSecondsPipe // 宣告 MinutesSecondsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // 將 AppRoutingModule 加入到應用程式中
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
