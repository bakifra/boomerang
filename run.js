// Основной файл.
// Запускает игру.
const readlineSync = require('readline-sync');

const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');


// const userName = readlineSync.question('Как тебя зовут, ковбой?');

// function greeting() {
//   return readlineSync.question(
//     "Привет воин, как твое имя?\n"
//   );
//   };
// const user = greeting(); //имя пользователя

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 50,
});

// Запуск игры
console.clear();

game.play();

runInteractiveConsole(game);
