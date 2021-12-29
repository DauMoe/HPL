const express = require("express");
const {GetSingleQuesByLevel} = require("./QuestionService.js");
const QuestionRouter = express.Router();

QuestionRouter.post("/single", GetSingleQuesByLevel);

module.exports = {
    x: QuestionRouter
};