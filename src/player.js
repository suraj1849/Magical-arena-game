// * DEFINE THE PLAYER CLASS
/**
 * @class Player
 * @classdesc Represents a player in the game
 */
export default class Player {
  // * DEFINE TYPES PLAYER VARIABLES
  /**
   * Creates an instance of Player.
   * @param {string} name - The name of the player
   * @param {number} health - The health points of the player
   * @param {number} strength - The strength attribute of the player
   * @param {number} attack - The attack power of the player
   */

  // * DEFINE THE CONSTRUCTORS
  constructor(name, health, strength, attack) {
    /** @type {string} */
    this.name = name;

    /** @type {string} */
    this.health = health;

    /** @type {string} */
    this.strength = strength;

    /** @type {string} */
    this.attack = attack;
  }

  /**
   * Checks if the player is still alive.
   * A player is considered alive if their health is greater than 0.
   *
   * @returns {boolean} True if the player's health is greater than 0, otherwise false.
   */
  isAlive() {
    return this.health > 0;
  }

  /**
   * Generates a random number between 1 and 6, inclusive.
   * Simulates the roll of a standard six-sided die.
   * @returns {number} A random integer between 1 and 6.
   */
  rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  /**
   * Executes an attack on a defender by the attacker.
   * Rolls a die for both the attacker and the defender to determine the attack and defense values.
   * Calculates the damage dealt based on the attacker's attack power and the defender's defense strength.
   * Reduces the defender's health by the damage taken (minimum of 0).
   *
   * @param {Object} defender - The player object being attacked.
   * @returns {Object} An object containing details of the attack, including:
   *                   - attack: the attacker's name,
   *                   - attackRoll: the roll value for the attacker's attack,
   *                   - defender: the defender's name,
   *                   - defenseRoll: the roll value for the defender's defense,
   *                   - damage: the actual damage dealt (minimum of 0),
   *                   - defenderHealth: the defender's remaining health.
   */
  attackDefender(defender) {
    // * ATTACKER ROLLS THE DIE
    const attackRoll = this.rollDie();

    // * DEFENDER ROLLS THE DIE
    const defenseRoll = defender.rollDie();

    // * DAMAGE DONE BY ATTACKER
    const attackDamage = this.attack * attackRoll;

    // * DEFENSE DONE BY DEFENDER
    const defenseStrength = defender.strength * defenseRoll;

    // * TOTAL DAMAGE
    const damage = attackDamage - defenseStrength;

    // * DAMAGE TAKEN
    const damageTaken = Math.max(0, damage);

    // * HEALTH REDUCES DUE TO ATTACKERS ATTACK
    defender.health -= damageTaken;

    // * RETURN DEFENDER'S CURRENT STATE
    return {
      attack: this.name,
      attackRoll,
      defender: defender.name,
      defenseRoll,
      damage: Math.max(0, damage),
      defenderHealth: defender.health,
    };
  }
}
