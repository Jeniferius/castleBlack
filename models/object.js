const dataBase = require("../db");
const objects = dataBase.objects;

exports.insert = (id, name, value) => {
  let obj = { id: id, name: name, value: value };
  objects.push(obj);
}