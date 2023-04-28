// Наш герой.

class Hero {
  constructor({ position, boomerang, lives = 3 }) {
    this.skin = '🤠';
    this.position = position;
    this.boomerang = boomerang;
    this.lives = lives;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.position = this.position + 1; // Устанавливаем начальную позицию бумеранга
    this.boomerang.fly();
  }

  hurt() {
    const skins = ['🥴', '😃', '🤠'];
    this.lives -= 1;
    this.skin = skins[this.lives - 1];
    if (this.lives === 0) {
      this.die();
    }
  }

  die() {
    this.skin = '💀';
    console.clear();
    console.log("\x1b[1m\x1b[31m\nП О Т Р А Ч Е Н О 💀\n\n");
    process.exit();
  }
}

module.exports = {Hero};
