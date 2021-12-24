const express = require("express");
const app = express();
const cors = require("cors");
const ExamRouter = require("./Components/Exam/ExamRouter");
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("exam", ExamRouter);

app.listen(PORT, function () {
    console.log("Iam running at " + PORT);
});