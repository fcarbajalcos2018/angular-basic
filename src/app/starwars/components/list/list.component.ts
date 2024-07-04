import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-sw-list',
  templateUrl: `./list.component.html`,
  styleUrl: './list.component.css',
})
export class SWListComponent { 
  
  public isClicked = false;

  @Input()
  public characterList: Character[] = [];
  /*
  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();
  */
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();
  onClick(i: number) {
    this.isClicked = true;
  }
  /*
  onDelete(i: number) : void {
    console.log(i);
    this.onDeleteCharacter.emit(i);
  }*/
  onDelete(id: string | undefined): void {
    console.log('d ' + id);
    console.log('type ' + typeof id)
    if (id?.length == 0 || typeof id === 'undefined') {
      console.log('Unable to delete, no ID present.');
      return;
    }
    this.onDeleteCharacter.emit(id);
  }
}
