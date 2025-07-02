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
 userDetails = { name: 'Shima', age: 25 }; 
  changeName() {
    this.userName = this.userName === 'Shima' ? 'Epshita' : 'Shima';
  }

   

  changeUserName() {
    this.userDetails.name = this.userDetails.name === 'Shima' ? 'Epshita' : 'Shima';
  }
}
