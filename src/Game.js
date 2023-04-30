// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const { Hero } = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");

// const Boomerang = require('./game-models/Boomerang');
const { View } = require("./View");
const Boomerang = require("./game-models/Boomerang");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang(trackLength);
    this.hero = new Hero({ position: 25, boomerang: this.boomerang });
    this.enemy = new Enemy(trackLength);
    this.view = new View(this);
    this.track = [];
    this.regenerateTrack();
    this.count = 0;
    this.speed = 100;
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill("_");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin; // Добавьте эту строку
    if (
      this.hero.boomerang.position >= 0 &&
      this.hero.boomerang.position < this.trackLength
    ) {
      this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.hurt();
    }
  }

  play() {

   console.log('Привет ковбой, как твое имя?\n');
   const newUser = process.argv[2];
   
    setInterval(() => {
      // Let's play!
      this.handleCollisions();
      this.regenerateTrack();
      if ((this.count === 2)) {
        this.speed = 10;
      }
      // Добавьте логику движения врагов, например, двигаться влево
      this.enemy.moveLeft();

      // Если враг достиг края трека, перемещаем его в начало
      if (this.enemy.position === 0) {
        this.enemy.position = this.trackLength - 1;
      }

      this.view.render(this.track);
    }, 100); // Вы можете настроить частоту обновления игрового цикла
  }

  handleCollisions() {
    if (this.hero.position === this.enemy.position) {
      this.enemy.die();

      setTimeout(() => {
        this.hero.hurt();
        this.enemy = new Enemy(this.trackLength);
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
        this.count+=1
        this.enemy.skin = "💥";
        setTimeout(() => {
          this.enemy = new Enemy(this.trackLength);
        }, 100);
      } // Создаем нового врага
    }
  }
}

module.exports = Game;
