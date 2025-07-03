import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-hometeamplates',
  imports: [CommonModule,FormsModule ],
  templateUrl: './hometeamplates.html',
  styleUrl: './hometeamplates.css'
})
export class Hometeamplates {
  @ViewChild('usernameInput') usernameInput!: ElementRef;
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

  handleClick() {
    alert('Button Clicked!');
  }

  message = '';
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message = input.value;
  }

  showEventDetails(event: MouseEvent) {
    console.log('Event Type:', event.type);
    console.log('X Position:', event.clientX);
  }

  submitForm(event: Event) {
    event.preventDefault(); // default reload বন্ধ
    const username=this.usernameInput.nativeElement.value;
    console.log('Form submitted!',username);
  }

  onEnterKey(){
    alert('you pressed enter')
  }

  hovering = false;

  name = '';

onNameChange() {
  console.log('Name changed to:', this.name);
}
}
