const express = require ("express")

const {} = require("./../controller/AdventureDetails.controller")

const AdventureDetailsRouter = express.Router()

AdventureDetailsRouter.post('/add',SaveNewAdventureDetail)

module.exports = AdventureDetailsRouter