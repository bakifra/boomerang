// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor(game) {
    this.game = game;
  }

  render() {
    const yourTeamName = "Лисярами";

    // Тут всё рисуем.
    console.clear();
    console.log("\x1b[1m");
    console.log(`Здоровье правого врага: \x1b[41m${this.game.enemy.health}\x1b[0m`);
    console.log(`\x1b[1mЗдоровье левого врага: \x1b[41m${this.game.enemy2.health}\n\x1b[0m`);
    console.log(`\x1b[1m\x1b[32mТвои жизни: ${this.game.hero.lives}\n\x1b[0m`);
    console.log('\x1b[4m', this.game.track.join(""));
    console.log('\x1b[0m', this.game.track2.join(""));
    console.log(`\n\x1b[1m\x1b[33mИграет: ${this.game.hero.user}\n`);
    console.log(`\n\x1b[1m\x1b[33mУбито врагов: ${this.game.count - 1}\n`);
    console.log("\x1b[1m", "\x1b[35m");
    console.log(`Игра разработана \x1b[36m${yourTeamName} 🤟🤟🤟\n`);
    console.log("\x1b[0m");
  }
}

module.exports = { View };
