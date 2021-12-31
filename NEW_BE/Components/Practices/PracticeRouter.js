const express = require("express");
const {SearchStructure, GetRandomStructure, GetDetailStructure} = require("./PracticeService");
const PracticeRouter = express.Router();

PracticeRouter.post("/search", SearchStructure);
PracticeRouter.post("/random", GetRandomStructure);
PracticeRouter.post("/info", GetDetailStructure);

module.exports = {
    x: PracticeRouter
};