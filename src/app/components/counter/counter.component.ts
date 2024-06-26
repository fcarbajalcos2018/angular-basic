import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <p>Counter: {{counter}}</p>
        <button (click)="increment(-1)">+1</button>
        <button (click)="decrement(-1)">-1</button>
        <button (click)="reset()">Reset</button>
    `
})
export class CounterComponent {
  public default: number = 10;
  public counter: number = this.default;
  
  increment(n : number) : void {
    this.counter += n;
  }
  decrement(n : number) : void {
    this.counter -= n;
  }
  reset() : void {
    this.counter = this.default;
  }
}