// Наш герой.

class Hero {
  constructor({ position, boomerang }) {
    this.skin = "🤠";
    this.position = position;
    this.boomerang = boomerang;
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

  die() {
    this.skin = "💀";
    console.log("\x1b[1m\x1b[31m П О Т Р А Ч Е Н О 💀\n");
    process.exit();
  }
}

module.exports = Hero;
