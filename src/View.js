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
    console.log('\n');
    //console.log(`Играет ${this.game.play.newUser}\n`);
    console.log(`Здоровье врага: ${this.game.enemy.health}\n`);
    console.log (`Твои жизни: ${this.game.hero.lives}\n`);
    console.log(`Counter: ${this.game.count}`);
    console.log('\x1b[1m', '\x1b[35m');
    console.log(`Игра разработана \x1b[36m${yourTeamName} 🤟🤟🤟\n`);
    console.log('\x1b[0m');
  }
}

module.exports = {View};
