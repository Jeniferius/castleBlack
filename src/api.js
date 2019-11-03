const { Router } = require("express");
const api = Router();
const dataBase = require("../db");
const modelPlayer = require("../models/player");
const modelObject = require("../models/object");

// This will be your data source
// - ANSWER: Database moved to file db.js
// - For maintaining an order in the exercise and because the DB are usually external. Thus we execute a more real case.

// EXAMPLE ENDPOINT: LIST ALL OBJECTS
// - Modified to run correctly
api.get("/objects", function(req, res) {
  res.json(dataBase.objects);
});

// List all players
api.get("/players", (req, res) => {
  res.json(dataBase.players);
});

// Create player
api.post("/insertPlayer", (req, res) => {
  modelPlayer.insert(5, "Joffrey Baratheon", 19, 100, [5]);
  res.json(dataBase.players);
});

// Get player by id
api.get("/player/:id", (req, res) => {
  res.json(modelPlayer.getById(req.params.id));
});

// Arm a player with an object in its bag
api.post("/addObject/:playerName/:objectName", (req, res) => {
  modelPlayer.addObjectToBag(req.params.playerName, req.params.objectName);
  res.json(dataBase.players);
});

// Kill a player
api.get("/killPlayer/:id", (req, res) => {
  modelPlayer.killPlayer(req.params.id);
  res.json(dataBase.players);
});

// Create object
api.get("/insertObject", (req, res) => {
  modelObject.insert(5, "hammer", -15);
  res.json(dataBase.objects);
});

// Get object by id
api.get("/object/:id", (req, res) => {
  res.json(modelObject.getById(req.params.id));
});

module.exports = api;