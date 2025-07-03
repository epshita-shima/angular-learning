import { Component } from '@angular/core';
import { User } from './user/user';
import { CommonModule } from '@angular/common';
import { Timercomponent } from './timercomponent/timercomponent';

@Component({
  selector: 'app-home',
  imports: [CommonModule ,User,Timercomponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 userName: string = 'Shima';
 user = { name: 'Shima' };
 showTimer = true;

  changeName() {
    this.userName = this.userName === 'Shima' ? 'Epshita' : 'Shima';
  }

  changeUserName() {
    this.user.name = this.user.name === 'Shima' ? 'Epshita' : 'Shima';
  }

  toggleTimer() {
    this.showTimer = !this.showTimer;
  }
}
