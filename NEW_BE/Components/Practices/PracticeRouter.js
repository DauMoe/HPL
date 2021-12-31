const express = require("express");
const {SearchStructure, GetRandomStructure, GetDetailStructure, GetAllStructure} = require("./PracticeService");
const PracticeRouter = express.Router();

PracticeRouter.post("/search", SearchStructure);
PracticeRouter.post("/random", GetRandomStructure);
PracticeRouter.post("/info", GetDetailStructure);
PracticeRouter.post("/all", GetAllStructure);

module.exports = {
    x: PracticeRouter
};