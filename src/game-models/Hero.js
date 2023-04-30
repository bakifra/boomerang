// Наш герой.
const sound = require("sound-play");

class Hero {
  constructor({ position, boomerang, lives = 3, direction = "r" }) {
    this.skin = "🤠";
    this.position = position;
    this.boomerang = boomerang;
    this.lives = lives;
    this.direction = direction;
    this.positionY = 0;
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
    if(this.positionY === 1){
      this.positionY -= 1
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

  die() {
    console.clear();
    //this.skin = '💀';
    setTimeout(() => {
      sound.play("src/sounds/death.mp3", 1);
      console.log("\x1b[1m\x1b[31m\nП О Т Р А Ч Е Н О 💀\n\n");
      process.exit();
    }, 100);
  }
}

module.exports = { Hero };
