// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor(game) {
    this.game = game;
  }

  render() {
    const yourTeamName = "Лисярами";

    // Тут всё рисуем.
    console.clear();
    console.log("\n");
    console.log(`Здоровье правого врага: ${this.game.enemy.health}`);
    console.log(`Здоровье левого врага: ${this.game.enemy2.health}\n`);
    console.log(`Твои жизни: ${this.game.hero.lives}\n`);
    console.log(this.game.track.join(""));
    console.log(`\nУбито врагов: ${this.game.count - 1}`);
    console.log("\x1b[1m", "\x1b[35m");
    console.log(`Игра разработана \x1b[36m${yourTeamName} 🤟🤟🤟\n`);
    console.log("\x1b[0m");
  }
}

module.exports = { View };
