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

exports.addObjectToBag = (playerName, objectName) => {
  let objectId;
  let isObject = false;
  for (let i = 0; i < dataBase.objects.length; i++) {
    if (dataBase.objects[i].name === objectName) {
      objectId = dataBase.objects[i].id;
      isObject = true;
      break;
    }
  }

  if (isObject) {
    let isPlayer = false;
    players.forEach((player) => {
      if (player.name === playerName) {
        player.bag.push(objectId);
        isPlayer = true;
      }
    });
    if (!isPlayer) throw "The player does not exist";
  } else {
    throw "The object does not exist";
  }
}