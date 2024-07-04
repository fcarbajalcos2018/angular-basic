import { stringify } from './../../../../../node_modules/@types/uuid/index.d';
import { ICharacter } from "../../interfaces/character.interface";

export class Character implements ICharacter{
    
    /**
     *
     */
    constructor(public name: string, public isJedi: boolean, public id: string = '') {
        
    }

    get Name(): string {
        //console.log(`This name ${this.name}`);
        return this.name;
    }

    get ID(): string | undefined {
        return this.id;
    }

    jediOrSith() {
        if (this.isJedi)
            return 'Jedi';
        return 'Sith';
    }

    toJedi() {
        this.isJedi = true;
    }
    toSith() {
        this.isJedi = false;
    }
    
}