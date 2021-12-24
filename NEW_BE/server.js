const express = require("express");
const cors = require("cors");

// const ExamRouter = require("./Components/Exam/ExamRouter");
const UserRouter = require("./Components/User/UserRouter.js");

// import express from "express";
// import cors from "cors";
// import User from "./Components/User/UserRouter.js";

const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.json());

// app.use("/exam", ExamRouter);
app.use("/user", UserRouter.x);

app.listen(PORT, function () {
    console.log("Iam running at " + PORT);
});