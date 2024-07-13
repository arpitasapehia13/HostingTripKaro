const express = require("express");

const {AddNewAdventureController, GetAllAdventureByCityName, DeleteAdventureByIdController} = require("./../controller/Adventure.Controller")

const AdventureRouter = express.Router();

AdventureRouter.post("/add", AddNewAdventureController);

AdventureRouter.get("/", GetAllAdventureByCityName)

AdventureRouter.delete("/delete", DeleteAdventureByIdController)

module.exports = AdventureRouter;