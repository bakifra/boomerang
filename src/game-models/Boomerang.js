/* eslint-disable no-plusplus */
// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
const sound = require('sound-play');

class Boomerang {
  constructor(trackLength) {
    this.skin = '🌀';
    this.position = -1;
    this.trackLength = trackLength;
  }

  flyRight() {
    const distance = 5; // Устанавливаем дистанцию полета бумеранга

    // Запускаем бумеранг на заданное расстояние
    for (let i = 1; i <= distance; i++) {
      sound.play('src/sounds/spring.mp3', 0.2);
      setTimeout(() => this.moveRight(1), 100 * i);
    }

    // Возвращаем бумеранг на заданное расстояние
    for (let i = 1; i <= distance; i++) {
      setTimeout(() => this.moveLeft(1), 100 * (distance + i));
    }

    // Сбрасываем позицию бумеранга после возвращения
    setTimeout(() => this.reset(), 100 * (distance * 2));
  }

  flyLeft() {
    const distance = 5; // Устанавливаем дистанцию полета бумеранга

    // Запускаем бумеранг на заданное расстояние
    for (let i = 1; i <= distance; i++) {
      sound.play('src/sounds/spring.mp3', 0.2);
      setTimeout(() => this.moveLeft(1), 100 * i);
    }

    // Возвращаем бумеранг на заданное расстояние
    for (let i = 1; i <= distance; i++) {
      setTimeout(() => this.moveRight(1), 100 * (distance + i));
    }

    // Сбрасываем позицию бумеранга после возвращения
    setTimeout(() => this.reset(), 100 * (distance * 2));
  }

  reset() {
    this.position = -1; // Сброс позиции бумеранга
  }

  moveLeft(distance) {
    // Идём влево.
    this.position -= distance;
  }

  moveRight(distance) {
    // Идём вправо.
    this.position += distance;
  }
}

module.exports = Boomerang;
