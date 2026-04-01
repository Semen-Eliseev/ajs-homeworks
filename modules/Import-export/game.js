const { Character } = require('./domain.js');

class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export default Game;

module.exports = {
    GameSavingData,
    readGameSaving,
    writeGameSaving
}
