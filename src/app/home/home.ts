import { Component } from '@angular/core';
import { User } from './user/user';
import { Timer } from './timer/timer';
import { CommonModule } from '@angular/common';
import { Childcomponent } from './childcomponent/childcomponent';

@Component({
  selector: 'app-home',
  imports: [User, Timer,CommonModule,Childcomponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  userName: string = 'Shima';
  userDetails = { name: 'Shima', age: 25 };
  showTimer = true;
  changeName() {
    this.userName = this.userName === 'Shima' ? 'Epshita' : 'Shima';
  }

  changeUserName() {
    this.userDetails.name = this.userDetails.name === 'Shima' ? 'Epshita' : 'Shima';
  }

  toggleTimer() {
    this.showTimer = !this.showTimer;
  }
}
