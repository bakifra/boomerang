/* eslint-disable class-methods-use-this */
// Наш герой.
const sound = require("sound-play");
const view = require("../View");
const { User } = require("../../db/models");

class Hero {
  constructor({ position, boomerang, user, lives = 3, direction = "r" }) {
    this.skin = "🤠";
    this.position = position;
    this.boomerang = boomerang;
    this.lives = lives;
    this.direction = direction;
    this.positionY = 0;
    this.user = user;
    this.points = 0;
  }

  moveLeft() {
    // Идём влево.
    if (this.position > 0) {
      this.position -= 1;
      this.direction = "l";
    }
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    this.direction = "r";
  }

  moveDown() {
    if (this.positionY === 0) {
      this.positionY += 1;
    }
  }

  moveUp() {
    if (this.positionY === 1) {
      this.positionY -= 1;
    }
  }

  attack() {
    // Атакуем
    if (this.direction === "r") {
      this.boomerang.position = this.position + 1; // Устанавливаем начальную позицию бумеранга
      this.boomerang.flyRight();
    }
    if (this.direction === "l") {
      this.boomerang.position = this.position - 1; // Устанавливаем начальную позицию бумеранга
      this.boomerang.flyLeft();
    }
  }

  hurt() {
    const skins = ["🥴", "😃", "🤠"];
    this.lives -= 1;
    sound.play("src/sounds/ouch.mp3", 1);
    this.skin = skins[this.lives - 1];
    if (this.lives === 0) {
      this.die();
    }
  }

  count() {
    this.points += 10;
  }

  die() {
    console.clear();
    // this.skin = '💀';
    setTimeout(() => {
      sound.play("src/sounds/death.mp3", 1);
      console.log("\x1b[1m\x1b[31m\nП О Т Р А Ч Е Н О 💀\x1b[0m\n\n");

      createUser(createUser(this.user, this.points));
      console.log(`\x1b[1m\x1b[1m${this.user} набрал ${this.points} очков!`);
      process.exit();
    }, 100);
  }
}
async function createUser(name, points) {
  try {
    const result = await User.create({ name, points });
    console.log(createUser(name, points));
    console.log(result);
  } catch ({ message }) {
    console.log(message);
  }
}

module.exports = { Hero };
