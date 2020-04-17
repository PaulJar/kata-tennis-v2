
export class PlayerModel {
    name: string;
    score = 0;              // Player score
    advantage: boolean;     // Represent weather the player has an advantage score
    games: number;
    sets: number;
    picture: string;

    constructor(name: string) {
        this.name = name;
        this.score = 0;
        this.advantage = false;
        this.games = 0;
        this.sets = 0;
    }
}
