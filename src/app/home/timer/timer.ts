import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.css'
})
export class Timer implements OnInit, OnDestroy {
 counter:number=0;
 private intervalId: any;

 ngOnInit(): void {
   this.intervalId=setInterval(()=>{
    this.counter++;
    console.log("Counter:",this.counter)
   },1000)
 }
 ngOnDestroy(): void {
   clearInterval(this.intervalId);
   console.log('TimerComponent destroyed and interval cleared',this.counter)
 }
}
