// Наш герой.
const sound = require('sound-play');

class Hero {
  constructor({ position, boomerang, lives = 3 }) {
    this.skin = '🤠';
    this.position = position;
    this.boomerang = boomerang;
    this.lives = lives;
  }

  moveLeft() {
    // Идём влево.
    if (this.position > 0) {
      this.position -= 1;
    }
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем
    this.boomerang.position = this.position + 1; // Устанавливаем начальную позицию бумеранга
    this.boomerang.fly();
  }

  hurt() {
    const skins = ['🥴', '😃', '🤠'];
    this.lives -= 1;
    sound.play('src/sounds/ouch.mp3', 1);
    this.skin = skins[this.lives - 1];
    if (this.lives === 0) {
      this.die();
    }
  }

  die() {
    //console.clear();
    //this.skin = '💀';
    setTimeout(() => {
    sound.play('src/sounds/death.mp3', 1);
    console.log("\x1b[1m\x1b[31m\nП О Т Р А Ч Е Н О 💀\n\n");
    process.exit();
    }, 100);
  }
}

module.exports = { Hero };