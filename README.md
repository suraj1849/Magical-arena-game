# SWIGGY ASSESSMENT - DESIGNING MAGICAL ARENA

# Magical Arena

The Magical Arena is a simple game where two players fight in an arena until one player's health reaches zero. Players attack in turns, rolling dice to determine the outcome of their attacks and defenses.

## Installation

```bash
npm install
```

## Usage:- To start the game, run:

```bash
npm start
```

Follow the on-screen instructions to play the game.

## Testing:- To run the unit tests, use:

```bash
npm test
```

## Game Rules

- Each player is defined by their "health," "strength," and "attack" attributes, all positive integers.
- The player dies if their health reaches zero.
- Players attack in turns, rolling a six-sided die to determine the outcome of their attacks and defenses.
- The attacker's attack value is multiplied by the outcome of their attacking die roll to calculate damage.
- The defender's strength value is multiplied by the outcome of their defending die roll to calculate the damage defended.
- The defender's health is reduced by the excess damage after defending.

## Implementation Details

- The project is implemented in Node.js.
- The Player class defines a player with attributes and methods for attacking and defending.
- The Game class manages the game flow, including starting the game and declaring a winner.
