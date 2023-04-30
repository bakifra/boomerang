// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const { Hero } = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const Enemy2 = require("./game-models/Enemy2");
// const Boomerang = require('./game-models/Boomerang');
const { View } = require("./View");
const Boomerang = require("./game-models/Boomerang");
const sound = require("sound-play");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang(trackLength);
    this.hero = new Hero({ position: 25, boomerang: this.boomerang });
    this.enemy = new Enemy(trackLength, this.count);
    this.enemy2 = new Enemy2(trackLength, this.count);
    this.view = new View(this);
    this.track = [];
    this.regenerateTrack();
    this.count = 1;
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill("_");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy2.position] = this.enemy2.skin;
    this.track[this.enemy.position] = this.enemy.skin; // Добавьте эту строку
    if (
      this.hero.boomerang.position >= 0 &&
      this.hero.boomerang.position < this.trackLength
    ) {
      this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }
  }

  check() {
    if (
      this.hero.position === this.enemy.position ||
      this.hero.position === this.enemy2.position
    ) {
      this.hero.hurt();
    }
  }

  play() {
    sound.play("src/sounds/theme.mp3", 1);

    setInterval(() => {
      // Let's play!
      this.handleCollisions();
      this.regenerateTrack();
      // Добавьте логику движения врагов, например, двигаться влево
      this.enemy.moveLeft();
      this.enemy2.moveRight();

      // Если враг достиг края трека, перемещаем его в начало
      if (this.enemy.position === 0) {
        this.enemy.position = this.trackLength - 1;
      }
      if (this.enemy2.position === this.trackLength) {
        this.enemy2.position = 1;
      }

      this.view.render(this.track);
    }, 100); // Вы можете настроить частоту обновления игрового цикла
  }

  handleCollisions() {
    if (this.hero.position === this.enemy.position) {
      this.enemy.die();

      setTimeout(() => {
        this.hero.hurt();
        this.enemy = new Enemy(this.trackLength, this.count);
      }, 1);
    }
    if (this.hero.position === this.enemy2.position) {
      this.enemy2.die();

      setTimeout(() => {
        this.hero.hurt();
        this.enemy2 = new Enemy2(this.trackLength, this.count);
      }, 1);
    }

    if (
      this.boomerang.position === this.enemy.position ||
      this.boomerang.position - 1 === this.enemy.position ||
      this.boomerang.position + 1 === this.enemy.position
    ) {
      this.enemy.panch();
      // Обнуляем позицию бумеранга после столкновения с врагом
      // this.boomerang.position = -1;
      if (this.enemy.health === 0) {
        this.count += 1;
        this.enemy.skin = "💥";
        setTimeout(() => {
          this.enemy = new Enemy(this.trackLength, this.count);
        }, 100);
      } // Создаем нового врага
    }
    if (this.hero.position === this.enemy2.position) {
      this.enemy2.die();

      setTimeout(() => {
        this.hero.hurt();
        this.enemy2 = new Enemy2(this.trackLength, this.count);
      }, 1);
    }

    if (
      this.boomerang.position === this.enemy2.position ||
      this.boomerang.position - 1 === this.enemy2.position ||
      this.boomerang.position + 1 === this.enemy2.position
    ) {
      this.enemy2.panch();
      // Обнуляем позицию бумеранга после столкновения с врагом
      // this.boomerang.position = -1;
      if (this.enemy2.health === 0) {
        this.count += 1;
        this.enemy2.skin = "💥";
        setTimeout(() => {
          this.enemy2 = new Enemy2(this.trackLength, this.count);
        }, 100);
      } // Создаем нового врага
    }
  }
}

module.exports = Game;
