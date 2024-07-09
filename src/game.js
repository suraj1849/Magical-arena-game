// * IMPORT CUSTOM PLAYER CLASS
import Player from "./player.js";

/**
 * @class Game
 * @classdesc Represents a game between two players
 */
export default class Game {
  /**
   * Creates an instance of Game.
   * @param {Player} player1 - The first player
   * @param {Player} player2 - The second player
   */
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  // * STARTS THE GAME AND EXECUTES THE COMBAT BETWEEN TWO PLAYERS.
  start() {
    // * LOGS THE INITIAL CONDITION OF BOTH PLAYERS.
    this.logInitialCondition(this.player1);
    this.logInitialCondition(this.player2);

    // * DETERMINES THE INITIAL ATTACKER BASED ON THE PLAYERS' HEALTH.
    let attacker =
      this.player1.health < this.player2.health ? this.player1 : this.player2;

    // * ALTERNATES TURNS BETWEEN THE ATTACKER AND DEFENDER UNTIL ONE PLAYER'S HEALTH DROPS TO 0 OR BELOW.
    let defender = attacker === this.player1 ? this.player2 : this.player1;

    // * LOGS THE RESULT OF EACH ATTACK, INCLUDING THE ATTACK ROLL, DEFENSE ROLL, DAMAGE DEALT, AND REMAINING HEALTH OF THE DEFENDER.
    while (this.player1.isAlive() && this.player2.isAlive()) {
      // * ATTACKER ATTACKS THE DEFENDER
      const result = attacker.attackDefender(defender);

      // * ATTACH RESULT LOG
      console.log(
        `${result.attack} attacks! Roll: ${result.attackRoll}, ${result.defender} defends! Roll: ${result.defenseRoll}, Damage: ${result.damage}, ${result.defender} Health: ${result.defenderHealth}`
      );

      // * DECLARES THE WINNER ONCE A PLAYER'S HEALTH DROPS TO 0 OR BELOW.
      if (!defender.isAlive()) {
        console.log(`${defender.name} has died. ${attacker.name} wins!`);
        break;
      }

      // * IF THE WINNER NOT DECIDED LETS SWAP ATTACKER AND DEFENDER
      [attacker, defender] = [defender, attacker];
    }
  }

  /**
   * Logs the initial condition of the player at the start of the game.
   * Displays the player's name, health, strength, and attack attributes.
   *
   * @param {Object} player - The player object whose initial condition is to be logged.
   */
  logInitialCondition(player) {
    console.log(
      `${player.name} starts the game with ${player.health} health, ${player.strength} strength, and ${player.attack} attack!`
    );
  }
}
