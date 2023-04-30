// Враг.
const sound = require('sound-play');

class Enemy {
  constructor(trackLength, count) {
    this.generateSkin();
    this.position = trackLength-2;
    this.count = count;
    this.rendHealth();
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  rendHealth() {
    this.health = Math.ceil(Math.random() * 10);
  }

  panch() {
    sound.play('src/sounds/mobhurt.mp3');
    if (this.health > 0) {
      this.position += 3;
      this.health -= 1;
    } else {
      this.die();
    }
  }

  die() {
    this.skin = "💥";
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy