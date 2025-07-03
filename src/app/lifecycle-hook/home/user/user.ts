import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnChanges, DoCheck {
 @Input() userName: string = '';
  @Input() user: any;
  private prevName: string = '';


  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }

     ngDoCheck() {
    if (this.user.name !== this.prevName) {
      console.log('Name changed manually!');
      this.prevName = this.user.name;
    }
  }

 
}
