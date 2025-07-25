import express from "express";
import {signUp, login, logout, getUser, updateUser, replaceUser, deleteUser} from "../Controllers/user.controller.js"
import auth from "../MiddleWares/Auth.js";

let Router = express.Router()

Router.post("/signup", signUp)
.post("/login", login)
.post("/logout",auth, logout)
.get("/", auth,  getUser)
.patch("/update",auth, updateUser)
.put("/replace",auth, replaceUser)
.delete("/delete",auth, deleteUser)

export default Router
