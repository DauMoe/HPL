const express = require("express");
const {GetSingleQuesByLevel, CreateExamByConfig, GetExamConfig, GetResultExam, NewResult} = require("./QuestionService");
const QuestionRouter = express.Router();

QuestionRouter.post("/single", GetSingleQuesByLevel);
QuestionRouter.post("/exam", CreateExamByConfig);
QuestionRouter.post("/list_config", GetExamConfig);
QuestionRouter.post("/list_result", GetResultExam);
QuestionRouter.post("/new_result", NewResult);

module.exports = {
    x: QuestionRouter
};