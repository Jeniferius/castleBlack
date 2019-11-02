const { Router } = require("express");
const api = Router();
const dataBase = require("../db");
const modelPlayer = require("../models/player");

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
  modelPlayer.insert(10, "Name", 20, 100, [5]);
  res.json(dataBase.players);
})

module.exports = api;