const express = require("express");
const {GetSingleQuesByLevel, CreateExamByConfig, GetExamConfig, GetResultExam} = require("./QuestionService");
const QuestionRouter = express.Router();

QuestionRouter.post("/single", GetSingleQuesByLevel);
QuestionRouter.post("/exam", CreateExamByConfig);
QuestionRouter.post("/list_config", GetExamConfig);
QuestionRouter.post("/list_result", GetResultExam);

module.exports = {
    x: QuestionRouter
};