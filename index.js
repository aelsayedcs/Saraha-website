import dotenv from "dotenv"
dotenv.config()
import express from "express"
import bootstrap from "./src/index.router.js";

const app = express();
const port =5000;

bootstrap(express,app)
app.listen(port,()=>console.log(`App is listening to port..........${port}`))