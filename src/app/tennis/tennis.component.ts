import { Component, OnInit } from '@angular/core';
import { PlayerModel } from '../models/player.model';
import { MatchModel } from '../models/match.model';
import { interval, Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.css']
})
export class TennisComponent implements OnInit {
  players: Array<PlayerModel>;
  game: MatchModel;

  constructor() { }

  ngOnInit() {
    this.setUpNewGame(false);
  }

  setUpNewGame(autoplay) {
    this.players = [
      new PlayerModel('P. Jardel'),
      new PlayerModel('H. Le Teo')
    ];
    this.game = new MatchModel();
    this.game.players = this.players;
    if (autoplay === true) {
      this.game.startGame();
    }
  }
}
