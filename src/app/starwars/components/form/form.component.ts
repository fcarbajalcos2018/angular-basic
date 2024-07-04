import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-sw-form',
  templateUrl: `./form.component.html`,
  styleUrl: './form.component.css',
})
export class SWFormComponent { 

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = new Character('', true);
  
  emitCharacter(): void {

    console.log(this.character);
    
    if (this.character.name.length === 0)
    {
      console.log('Unable to emit character:')
      console.log(`Reason: ${this.character.name.length}`)
      return;
    }
      
    console.log(this.character.name + ' emitted');
    
    this.onNewCharacter.emit(this.character);
    
    this.character.name = '';
    this.character.isJedi = true;
  }
}
