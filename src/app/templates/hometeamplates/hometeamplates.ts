import { Component } from '@angular/core';

@Component({
  selector: 'app-hometeamplates',
  imports: [],
  templateUrl: './hometeamplates.html',
  styleUrl: './hometeamplates.css'
})
export class Hometeamplates {
  // Text Interpolation
  userName = 'Shima Khatun';
  // Property Binding
  profileImage = 'https://i.pravatar.cc/150?img=12';
  //  Attribute Binding
  isDisabled = true;
  // Class Binding
    isActive = true;
//  Style Binding 
  fontColor = 'green';
}
