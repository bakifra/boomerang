// Основной файл.
// Запускает игру.

const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 50,
});

// Запуск игры
console.clear();

game.play();

runInteractiveConsole(game);
