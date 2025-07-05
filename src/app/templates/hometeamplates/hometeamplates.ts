import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from './card/card';
@Component({
  selector: 'app-hometeamplates',
  imports: [CommonModule, FormsModule, Card],
  templateUrl: './hometeamplates.html',
  styleUrl: './hometeamplates.css',
})
export class Hometeamplates {
  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('myTemplate') templateRef!: TemplateRef<any>;
  constructor(private viewContainerRef: ViewContainerRef) {}

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
    const username = this.usernameInput.nativeElement.value;
    console.log('Form submitted!', username);
  }

  onEnterKey() {
    alert('you pressed enter');
  }

  hovering = false;

  name = '';

  onNameChange() {
    console.log('Name changed to:', this.name);
  }

  greet(name: string) {
    alert('Hello, ' + name + '!');
  }

  parentClicked() {
    console.log('Parent DIV clicked!');
  }

  childClicked(event: Event) {
    event.stopPropagation(); // Prevent parent click
    console.log('Child BUTTON clicked!');
  }

  items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ];

  user = {
    profile: {
      settings: {
        startDate: '2025-07-03',
      },
    },
  };

  a = 10;
  b = 20;

  myname = 'shima khatun';
  birthday = new Date(2000, 11, 15);
  salary = 4567.789;

  isLoggedIn = true;

  //ViewContainerRef
  loadTemplate() {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
