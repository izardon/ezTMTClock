import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: 'timer', component: TimerComponent } // 設定路由，將路徑 '/timer' 對應到 TimerComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
