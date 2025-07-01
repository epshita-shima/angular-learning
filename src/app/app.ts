import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './component/counter/counter';


@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet,Counter],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // app.ts
})
export class App {
  protected title = 'my-counter-app-with-signal';
}
