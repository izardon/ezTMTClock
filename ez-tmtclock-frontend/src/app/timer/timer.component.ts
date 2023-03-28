import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit {

  workTime: number = 25;
  breakTime: number = 5;
  remainingTime: number = 25 * 60;
  timer$!: Observable<number>;
  subscription!: Subscription;
  timerIsRunning: boolean = false;
  tasks: Task[] = [];

  ngOnInit() {
    this.timer$ = timer(0, 1000).pipe(
      map(() => --this.remainingTime),
      takeWhile(() => this.remainingTime >= 0)
    );
  }

  startWork() {
    this.remainingTime = this.workTime * 60;
    this.startTimer();
  }

  startBreak() {
    this.remainingTime = this.breakTime * 60;
    this.startTimer();
  }

  startTimer() {
    this.subscription = this.timer$.subscribe(() => {
      if (this.remainingTime <= 0) {
        this.playSound();
        this.subscription.unsubscribe();
      }
    });
    this.timerIsRunning = true;
  }

  stop() {
    this.subscription.unsubscribe();
    this.timerIsRunning = false;
  }

  toggleTimer() {
    if (this.timerIsRunning) {
      this.stop();
    } else {
      this.startTimer();
    }
  }

  playSound() {
    const audio = new Audio('assets/bell.mp3');
    audio.play();
    this.stopSound(audio);
  }

  stopSound(audio: HTMLAudioElement) {
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 5000);
  }

  addTask(title: string) {
    const newTask: Task = {
      id: new Date().getTime(),
      title: title,
      completed: false
    };
    this.tasks.push(newTask);
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }
}