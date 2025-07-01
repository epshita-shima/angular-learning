import { Component, effect, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [],
  templateUrl: './currency-converter.html',
  styleUrl: './currency-converter.css'
})
export class CurrencyConverter {
  baseCurrency = signal<'USD' | 'EUR' | 'GBP'>('USD');
  amount = signal<number>(1);

  exchangeRates: Record<string, number> = {
    USD: 122,
    EUR:143,
    GBP: 170,
  };

  convertedValue = linkedSignal(() => (this.amount() * this.exchangeRates[this.baseCurrency()]).toFixed(2));

  constructor() {
    effect(() => {
      console.log('Currency:', this.baseCurrency());
      console.log('Amount:', this.amount());
      console.log('Converted:', this.convertedValue());
    })
  }
  changeCurrency(value: string) {
    this.baseCurrency.set(value as 'USD' | 'EUR' | 'GBP');
  }

  changeAmount(value: number) {
    this.amount.set(+value);
  }
  changeCurrencyFromEvent(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.changeCurrency(value);
  }

  changeAmountFromEvent(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    this.changeAmount(value);
  }
}
