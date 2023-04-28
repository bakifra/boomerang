// Сделаем отдельный класс для отображения игры в консоли.

class View {
  constructor(game) {
    this.game = game;
  }

  render() {
    const yourTeamName = 'Лисярами';

    // Тут всё рисуем.
    console.clear();
    console.log(this.game.track.join(''));
    console.log('\n\n');
    console.log(`У тебя ${this.game.hero.lives} жизни`);
    console.log('\n');
    console.log('\x1b[1m', '\x1b[35m');
    console.log(`Игра разработана \x1b[36m${yourTeamName} 🤟🤟🤟\n`);
    console.log('\x1b[0m');
  }
}

module.exports = {View};
