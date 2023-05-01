// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require("keypress");
const Enemy = require("./game-models/Enemy");
const Enemy2 = require("./game-models/Enemy2");

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  left: (game) => game.hero.moveLeft(),
  right: (game) => game.hero.moveRight(),
  space: (game) => game.hero.attack(),
  up: (game) => game.hero.moveUp(),
  down: (game) => game.hero.moveDown(),
};

// Какая-то функция.

function runInteractiveConsole(game) {
  keypress(process.stdin);
  process.stdin.on("keypress", (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name](game);
      }
      if (key.name === "r") {
        game.enemy.die();
        game.enemy = new Enemy(game.trackLength);
        game.enemy2.die();
        game.enemy2 = new Enemy2(game.trackLength);
      }
      // Прерывание программы.
      if (key.ctrl && key.name === "c") {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
  process.stdin.resume();
}

module.exports = runInteractiveConsole;
