const dataBase = require("../db");

exports.insert = (id, name, age, health, bag) => {
  let obj = { id: id, name: name, age: age, health: health, bag: bag };
  dataBase.players.push(obj);
}