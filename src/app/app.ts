import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './component/counter/counter';
import { CurrencyConverter } from './component/currency-converter/currency-converter';
import { ProfileCard } from './component/profile-card/profile-card';


@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet,Counter,CurrencyConverter,ProfileCard],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // app.ts
})
export class App {
  protected title = 'my-counter-app-with-signal';
}
