import { Injectable } from '@angular/core';
import { Character } from '../components/models/character.model';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class SWService {
    
    public characters: Character[] = [
        new Character('Obi-Wan Kenobi', true, uuid()),
        new Character('Darth Vader', false, uuid()),
        new Character('Luke Skywalker', true),
        new Character('Sheev Palpatine', false),
        new Character('Qui-Gon Jinn', true)
    ];

    onNewCharacter( character: Character ): void {
        console.log('Main Page');
        console.log(character);
        console.log(`Name: ${character.name}`);
        this.characters.push(new Character(character.Name, character.isJedi, uuid()));
    }
    /*
    onDeleteCharacter( i: number ): void {
        console.log('Delete at i = ' + i);
        this.characters.splice(i, 1);
    }*/
    onDeleteCharacter( id: string ): void {
        console.log(`Delete at ID = ${id}`);
        this.characters = this.characters.filter(c => c.ID !== id);
    }
    
}