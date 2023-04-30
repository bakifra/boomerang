// Наш герой.

class Hero {
  constructor({
    position, boomerang, lives = 3, direction = 'r',
  }) {
    this.skin = '🤠';
    this.position = position;
    this.boomerang = boomerang;
    this.lives = lives;
    this.direction = direction;
  }

  moveLeft() {
    // Идём влево.
    if (this.position > 0) {
      this.position -= 1;
      this.direction = 'l';
    }
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    this.direction = 'r';
  }

  attack() {
    // Атакуем
    if(this.direction === 'r'){
    this.boomerang.position = this.position + 1; // Устанавливаем начальную позицию бумеранга
    this.boomerang.flyRight();}
    if(this.direction === 'l'){
      this.boomerang.position = this.position - 1; // Устанавливаем начальную позицию бумеранга
      this.boomerang.flyLeft();
    }
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
    // console.clear();
    this.skin = '💀';
    console.log('\x1b[1m\x1b[31m\nП О Т Р А Ч Е Н О 💀\n\n');
    setTimeout(() => {
      process.exit();
    }, 100);
  }
}

module.exports = { Hero };
