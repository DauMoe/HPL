const express = require("express");
const {Login} = require("./UserService.js");

const UserRouter = express.Router();

UserRouter.post("/login", Login);

module.exports = {x: UserRouter};