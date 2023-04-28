// Враг.

class Enemy {
  constructor(trackLength, health = 4) {
    this.generateSkin();
    this.position = trackLength - 1;
    this.health = health;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  panch() {
    if (this.health > 0) {
      this.position += 3;
      this.health -= 1;
    } else {
      this.die();
    }
  }

  die() {
    if (this.health > 0) {
      this.position += 3;
      this.health -= 1;
    } else {
      this.position = '?';
      console.log('Enemy is dead!');
    }
  }
}

module.exports = Enemy;
