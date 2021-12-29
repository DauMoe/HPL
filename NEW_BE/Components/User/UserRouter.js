const express = require("express");
const {Login, NewUser} = require("./UserService.js");

const UserRouter = express.Router();

UserRouter.post("/login", Login);
UserRouter.post("/new_user", NewUser);

module.exports = {x: UserRouter};