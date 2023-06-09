// Враг.
const sound = require('sound-play');

class Enemy2 {
  constructor(trackLength, count = 1) {
    this.generateSkin();
    this.position = 1;
    this.count = count;
    this.rendHealth(this.count);
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveRight() {
    // Идём влево.
    this.position += 1;
  }

  rendHealth(def) {
    this.health = Math.ceil(Math.random() * def);
  }

  panch() {
    sound.play('src/sounds/mobhurt.mp3');
    if (this.health > 0) {
      this.position -= 3;
      this.health -= 1;
    } else {
      this.die();
    }
  }

  die() {
    this.skin = '💥';
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy2;
