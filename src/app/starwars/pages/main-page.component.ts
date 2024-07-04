import { Component, OnInit, Output } from '@angular/core';
import { Character } from '../components/models/character.model';
import { SWService } from '../services/starwars.service';

@Component({
    selector: 'app-starwars-mp',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
    
    /**
     *
     */
    constructor( private swService : SWService ) {
    }

    get characters(): Character[] {
        return [...this.swService.characters];
    }

    onDeleteCharacter(id: string): void {
        this.swService.onDeleteCharacter(id);
    }

    onNewCharacter(character: Character): void {
        this.swService.onNewCharacter(character);
    }
}