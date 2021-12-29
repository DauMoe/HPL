const express = require("express");
const cors = require("cors");

const QuestionRouter = require("./Components/Question/QuestionRouter");
const UserRouter = require("./Components/User/UserRouter.js");

const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.json());

// app.use("/exam", ExamRouter);
app.use("/user", UserRouter.x);
app.use("/question", QuestionRouter.x);

app.listen(PORT, function () {
    console.log("Iam running at " + PORT);
});