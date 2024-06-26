import { Component } from '@angular/core';

@Component({
  selector: 'app-vought-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  public voughtEmployees: string[] = ['Homelander', 'Storm Front', 'Deep', 'Translucent', 'A-Train', 'Starlight', 'Maeve']
  public removedEmp?: string;
  
  rfs(): void {
    this.removedEmp = this.voughtEmployees.pop()
  }
}
