// * IMPORT CUSTOM PLAYER CLASS
import Player from "./player.js";
// * IMPORT CUSTOM GAME CLASS
import Game from "./game.js";

// * INITIALIZE THE PLAYERS
const playerA = new Player("Player A", 50, 5, 10);
const playerB = new Player("Player B", 100, 10, 5);

// * CREATE A NEW GAME INSTANCE WITH playerA and playerB AS THE TWO PLAYERS.
const game = new Game(playerA, playerB);

// * START THE GAME
game.start();
