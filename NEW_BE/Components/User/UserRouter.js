const express = require("express");
const {Login, NewUser, Logout} = require("./UserService.js");

const UserRouter = express.Router();

UserRouter.post("/login", Login);
UserRouter.post("/new_user", NewUser);
UserRouter.post("/logout", Logout);

module.exports = {x: UserRouter};