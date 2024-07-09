import Player from "../src/player.js";
import Game from "../src/game.js";

// * DEFINE GAME TEST CASES
describe("Game", () => {
  //! UNIT TEST CASE 1:- SHOULD DECLARE A WINNER
  it("should declare a winner", () => {
    // * ARRANGE
    const playerA = new Player("Player A", 10, 1, 2);
    const playerB = new Player("Player B", 10, 1, 2);

    // * ACT
    const game = new Game(playerA, playerB);

    game.start();

    // * ASSERT
    expect(playerA.isAlive() && playerB.isAlive()).toBeFalsy();
  });
});
