import { Component } from '@angular/core';

@Component({
  //app-vought-list
  selector: 'app-vought-supe',
  templateUrl: './supe.component.html',
  styleUrl: './supe.component.css'
})
export class SupeComponent {
  
  public name: string = 'Homelander';
  public age:  number = 40;
  public occupation: string = 'the CEO of Vought Corporation and head of The Seven';
  
  changeName(newName: string): void {
    this.name = newName;
  }
  changeAge(newAge: number): void {
    this.age = newAge;
  }
  changeOcc(newOcc: string): void {
    this.occupation = newOcc;
  }

  get capitaliseName() {
    return this.name.toUpperCase();
  }

  get getDescription() {
    return `${this.name} is ${this.occupation}.
    His current age is ${this.age}.`;
  }
}
