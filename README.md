# KataTennisAngular6

KataTennisAngular6 is a Angular 6 Tennis Score app a Kata Code that demostrate tennis game rules. 

*This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.*


## Test code  - Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Demos:

#### Demo#1 - Player Wins :
![Alt text](https://github.com/aybezz/kata-tennis-angular6/blob/master/assets/01.win.gif "Demo#1 - Player Wins")

#### Demo#2 - Deuce + Avantage :

![Alt text](https://github.com/aybezz/kata-tennis-angular6/blob/master/assets/02.deuce-advantage.gif "Demo#2 - Deuce + Avantage")

#### Demo#3 - Tiebreak :

![Alt text](https://github.com/aybezz/kata-tennis-angular6/blob/master/assets/03.tie-break.gif "Demo#3 - Tiebreak")

## Background

In a game of tennis, a player begins with a score of zero (0). With each success, the player earns more points. The points are earned in this sequence:

0 > 15 > 30 > 40

#### This app support the following scenarios:

 - Points within a game are 0 - 15 - 30 - 40
 - If a player has 40 points and scores, he wins the game unless the opponent has 40 points too. **[Demo#1]**
 - If both players get at 40 points we have a **Deuce** and the app will show a Deuce Message. **[Demo#2]**
 - When on Deuce, scoring a point will mark advantage **A** to the player who scored.
 - If a player has advantage and scores he wins the game, but id the opponent scores they return to a Deuce. **[Demo#2]**
 - If a player wins 6 or more games with an advantage of at least two games, he wins the set and we start the next set.
 - If both players arrive to 6 games won, we enter a **Tie Break** situation, and a message for that will be shown. **[Demo#3]**
 - The Tie Break is won by the first player to score 7 points, with a least two of difference with its opponent.
 - The player who wins 2 sets out of 3, or 3 sets out of 5 wins the game. **[Demo#1]**
