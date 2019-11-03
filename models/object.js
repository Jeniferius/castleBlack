const dataBase = require("../db");
const objects = dataBase.objects;

exports.insert = (id, name, value) => {
  let obj = { id: id, name: name, value: value };
  objects.push(obj);
}

exports.getById = (id) => {
  let getObject;
  let isObject = false;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].id == id) {
      getObject = objects[i];
      isObject = true;
      break;
    }
  }
  if (!isObject) throw "The object does not exist";
  return getObject;
}