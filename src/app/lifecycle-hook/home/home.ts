import { Component } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-home',
  imports: [User],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 userName: string = 'Shima';

  changeName() {
    this.userName = this.userName === 'Shima' ? 'Epshita' : 'Shima';
  }
}
