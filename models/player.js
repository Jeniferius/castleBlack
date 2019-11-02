const dataBase = require("../db");
const players = dataBase.players;

exports.insert = (id, name, age, health, bag) => {
  let obj = { id: id, name: name, age: age, health: health, bag: bag };
  players.push(obj);
}

exports.getById = (id) => {
  let getPlayer;
  players.some((player) => {
    isPlayer = false;
    getPlayer = {};
    if (player.id == id) {
      getPlayer = player;
      isPlayer = true;
      return player.id == id;
    }
  });
  if (!isPlayer) throw "The player don't exist";
  return getPlayer;
}