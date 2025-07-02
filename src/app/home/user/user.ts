import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnChanges, DoCheck {
  @Input() userName: string = '';
  @Input() userDetails!: { name: string; age: number };

  ngOnChanges(changes: SimpleChanges): void {
    for (const key in changes) {
      const change = changes[key];
      console.log(`🔁 Property Changed: ${key}`);
      console.log(`Previous Value: ${change.previousValue}`);
      console.log(`Current Value: ${change.currentValue}`);
      console.log(`First Change: ${change.firstChange}`);
      console.log('----------------------');
    }
  }


  // ✅ 3. DoCheck
  ngDoCheck(): void {
    console.log('🔍 Custom Change Detection Triggered');
  }
}
