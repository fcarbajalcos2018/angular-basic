

export interface ICharacter {
    id?: string;
    name: string;
    isJedi: boolean;
    jediOrSith: () => string;
}