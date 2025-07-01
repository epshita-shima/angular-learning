import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
name = 'Epshita Shima';
  image = 'https://i.pravatar.cc/150?img=5';
  bio = 'Full-stack engineer from Canada. Loves Angular, React and building scalable apps. Writes on Medium and contributes to open-source.';
}
