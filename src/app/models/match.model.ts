import { PlayerModel } from './player.model';
// Rules:
// https://en.wikipedia.org/wiki/Tennis_scoring_system
export class MatchModel {
    score: number;      // Represent the score of the current set
    deuce: boolean;     // If each player has won three points(40 - 40 ), the score is called as "deuce". Then deuce: true in that case.
    currentset: number; // Represne the curent set
    sets = [];          // Contains the score of the the set of each player
    totalsets: number;  // Represent the number of sets in a math
    started: boolean;   // Determine if the game is started or not
    finished: boolean;  // Determine if the game is finished or not
    tiebreak: boolean;  // Represnets a set when the set score is tied at 6-6 to determine who wins the set
    players: Array<PlayerModel>; // Represents the two tennis players
    winner: PlayerModel; // Represents the winner the the game
    received: boolean;

    constructor() {
        this.score = 0;
        this.deuce = false;
        this.sets[0] = [0, 0];
        this.totalsets = 3;
        this.currentset = 0;
        this.started = false;
        this.finished = false;
        this.tiebreak = false;
        this.received = false;
    }

    public startGame() {
        this.started = true;
    }

    // Score point by following tennis game rules
    public scorePoint(player: number) {
        const opponent = (player ? 0 : 1);

        if (this.tiebreak) {
            this.players[player].score++;
            if (this.players[player].score >= 7 && this.players[player].score >= this.players[opponent].score + 2) {
                this.winGame(player);
            }
        } else {
            if (this.players[player].score < 30) {
                this.players[player].score += 15;
            } else if (this.players[player].score === 30) {
                this.players[player].score = 40;
                if (this.players[opponent].score === 40) {
                    this.deuce = true;
                }
            } else if (this.players[opponent].advantage) {
                this.players[opponent].advantage = false;
                this.players[player].advantage = false;
                this.deuce = true;
            } else if (this.deuce) {
                this.players[player].advantage = true;
                this.deuce = false;
            } else {
                this.winGame(player);
            }
        }
    }

    // Check the given player's score and make him winner
    public winGame(player) {
        this.players[player].games++;
        this.sets[this.currentset][player]++;

        const opponent = (player ? 0 : 1);

        if (this.players[player].games >= 6 && this.players[player].games >= this.players[opponent].games + 2 ) {
            this.winSet(player);
        }

        if (this.tiebreak) {
            this.tiebreak = false;
            this.winSet(player);
        } else if (this.players[player].games === 6 && this.players[opponent].games === 6) {
            this.tiebreak = true;
        }

        this.resetGame();
    }

    public resetGame() {
        for (const player of this.players) {
            player.score = 0;
            player.advantage = false;
        }
    }

    // Make the given player win the set otherwise make him winner of the current set and setup a new one
    public winSet(player) {
        this.players[player].sets++;

        if (Math.ceil(this.totalsets / 2) === this.players[player].sets) {
            // MATCH WON
            this.winner = this.players[player];
            this.finished = true;
        }  else {
            this.currentset++;
            this.sets[this.currentset] = [0, 0];
            this.resetSet();
        }
    }

    public resetSet() {
        for (const player of this.players) {
            player.games = 0;
        }
    }
}
