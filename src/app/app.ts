import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './component/counter/counter';
import { CurrencyConverter } from './component/currency-converter/currency-converter';
import { ProfileCard } from './component/profile-card/profile-card';
import { Home } from './lifecycle-hook/home/home';
import { CommonModule } from '@angular/common';
import { Hometeamplates } from './templates/hometeamplates/hometeamplates';


@Component({
  selector: 'app-root',
   standalone: true,
  imports: [CommonModule ,RouterOutlet,Counter,CurrencyConverter,ProfileCard,Home,Hometeamplates],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // app.ts
})
export class App {
  protected title = 'my-counter-app-with-signal';
}
