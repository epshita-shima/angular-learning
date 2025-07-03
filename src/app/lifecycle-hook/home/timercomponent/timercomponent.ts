import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timercomponent',
  imports: [CommonModule],
  templateUrl: './timercomponent.html',
  styleUrl: './timercomponent.css'
})
export class Timercomponent implements OnInit,OnDestroy {
   counter: number = 0;
  private intervalId: any;
   ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.counter++;
      console.log('⏱ Counter:', this.counter);
    }, 1000);
  }

   ngOnDestroy(): void {
    clearInterval(this.intervalId);
    console.log('🧹 TimerComponent destroyed and interval cleared');
  }
}
