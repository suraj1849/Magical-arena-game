// * IMPORT CUSTOM PLAYER CLASS
import Player from "../src/player.js";

// * DEFINE PLAYER TEST CASES
describe("player", () => {
  //! UNIT TEST CASE 1:- SHOULD CREATE A PLAYER WITH THE GIVEN ATTRIBUTES
  it("should create a player with the given attributes", () => {
    // * ARRANGE
    const name = "Test";
    const health = 100;
    const strength = 10;
    const attack = 5;

    // * ACT
    const player = new Player(name, health, strength, attack);

    // * ASSERT
    expect(player.name).toBe("Test");
    expect(player.health).toBe(100);
    expect(player.strength).toBe(10);
    expect(player.attack).toBe(5);
  });

  //! UNIT TEST CASE 2:- SHOULD CORRECTLY ROLL A DIE
  it("should correctly roll a die", () => {
    // * ARRANGE
    const player = new Player("Test", 100, 10, 5);

    // * ACT
    const roll = player.rollDie();

    // * ASSERT
    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
  });

  //! UNIT TEST CASE 3:- MAY OR MAY NOT REDUCE OPPONENT HEALTH WHEN ATTACKING
  it("may or may not reduce opponent health when attacking", () => {
    // * ARRANGE
    const player1 = new Player("Player A", 100, 10, 5);
    const player2 = new Player("Player B", 100, 10, 5);
    const initialHealth = player2.health;

    // * ACT
    player1.attackDefender(player2);

    // * ASSERT
    expect(player2.health).toBeLessThanOrEqual(initialHealth);
  });
});
