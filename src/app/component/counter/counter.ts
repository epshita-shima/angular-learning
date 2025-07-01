import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
   standalone: true,
  templateUrl: './counter.html',
  styleUrls: ['./counter.css'] // counter.ts
})
export class Counter {
  count=signal(0);

  increment(){
    this.count.update(c=>c+1);
  }

  decrement(){
    this.count.update(c=>c-1);
  }

  reset(){
    this.count.set(0)
  }
}
