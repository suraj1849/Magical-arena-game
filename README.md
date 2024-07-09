
# 🧙‍♂️✨ Magical Arena ✨🧙‍♀️

Welcome to **Magical Arena**, where two players engage in a thrilling battle until one emerges victorious! Roll the dice, strategize your attacks, and may the best mage win! 🎲⚔️

## 🚀 Installation

To install the game, run:

```bash
npm install
```

## 🎮 Usage

To start the game, run:

```bash
npm start
```

Follow the on-screen instructions to begin your magical duel! 🧙‍♂️🧙‍♀️

## 🧪 Testing

To run the unit tests, use:

```bash
npm test
```

## 📜 Game Rules

- **Attributes:** Each player has three attributes - **Health**, **Strength**, and **Attack**, all represented by positive integers.
- **Death:** A player dies when their health reaches zero. ⚰️
- **Turns:** Players attack in turns, rolling a six-sided die to determine the outcome of their attacks and defenses. 🎲
- **Attack Calculation:** The attacker's attack value is multiplied by the outcome of their attacking die roll to calculate the damage.
- **Defense Calculation:** The defender's strength value is multiplied by the outcome of their defending die roll to calculate the damage defended.
- **Damage:** The defender's health is reduced by the excess damage after defending. 💥

## 🛠️ Implementation Details

- **Language:** The project is implemented in Node.js.
- **Player Class:** Defines a player with attributes and methods for attacking and defending.
- **Game Class:** Manages the game flow, including starting the game and declaring a winner.

---

🎉 **Enjoy your magical duel in the arena! May the best mage win!** 🎉
```
