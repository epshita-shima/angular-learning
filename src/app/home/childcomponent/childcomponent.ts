import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  imports: [],
  templateUrl: './childcomponent.html',
  styleUrl: './childcomponent.css'
})
export class Childcomponent implements AfterContentInit, AfterViewInit{
 @ViewChild('titleRef') title!:ElementRef;

 ngAfterContentInit(): void {
   console.log('Successfuly load projected content')
 }


 ngAfterViewInit(): void {
   console.log('Render child component view');
   console.log('Title tag text:', this.title.nativeElement.textContent);
   this.title.nativeElement.style.color= "purple";
 }
}
