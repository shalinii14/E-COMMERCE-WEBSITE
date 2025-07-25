import express, { urlencoded } from "express";
import mongoose from "mongoose";
import userRouter from "./Routes/user.routes.js";
import 'dotenv/config'
import cookieParser from "cookie-parser"
import cors from "cors"

let server = express();
let PORT = process.env.PORT || 8080;

server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use(cookieParser());
server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

server.use("/users", userRouter)

async function dbConnect() {
    await mongoose.connect(process.env.MONGODB_URI)
}

dbConnect().then(()=>{
    console.log("Connected to MongoDB");
    server.listen(PORT);
}).catch((err)=>{
    console.log(err);
})


