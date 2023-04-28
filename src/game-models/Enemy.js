// Враг.

class Enemy {
  constructor(trackLength) {
    this.generateSkin();
    this.position = trackLength - 1;
    this.rendHealth()
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  rendHealth(){
    this.health = Math.ceil(Math.random() * 10)
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
      this.position = '?';
      console.log('Enemy is dead!');
    
  }
}

module.exports = Enemy;
