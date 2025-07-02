import { Component, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  myname = 'Epshita Shima';
  image = 'https://i.pravatar.cc/150?img=5';
  bio = 'Full-stack engineer from Canada. Loves Angular, React and building scalable apps. Writes on Medium and contributes to open-source.';

  name = input('');
  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
}
