const express = require("express");
const {Login, NewUser, Logout, GetStudent} = require("./UserService.js");

const UserRouter = express.Router();

UserRouter.post("/login", Login);
UserRouter.post("/new_user", NewUser);
UserRouter.post("/logout", Logout);
UserRouter.post("/get_student", GetStudent);

module.exports = {x: UserRouter};