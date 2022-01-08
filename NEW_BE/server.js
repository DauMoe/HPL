const express = require("express");
const cors = require("cors");

const QuestionRouter = require("./Components/Question/QuestionRouter");
const UserRouter = require("./Components/User/UserRouter.js");
const StructureRouter = require("./Components/Practices/PracticeRouter");

const app = express();
const PORT = 8081;

//Media: https://drive.google.com/drive/folders/1D3rbjQIPIpqFdyzWtyxolVQqlaz_7HyA
app.use(express.static("./public"));
app.use(cors());
app.use(express.json());

app.get("/test", function(req, resp) {
    resp.send("hi");
})

app.use("/user", UserRouter.x);
app.use("/question", QuestionRouter.x);
app.use("/structure", StructureRouter.x);

app.listen(PORT, function () {
    console.log("Iam running at " + PORT);
});