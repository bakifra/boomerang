// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');
const Enemy = require('./game-models/Enemy');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  left: (game) => game.hero.moveLeft(),
  right: (game) => game.hero.moveRight(),
  space: (game) => game.hero.attack(),
};

// Какая-то функция.

function runInteractiveConsole(game) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name](game);
      }
      if (key.name === 'r') {
        game.enemy.die();
        game.enemy = new Enemy(game.trackLength);
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

module.exports = runInteractiveConsole;
