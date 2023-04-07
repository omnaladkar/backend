import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
import cors from  "cors";
import bodyparser from 'body-parser';

import connect from "./config/db.mjs";
import cryptoRouter from "./routes/getCrypto.mjs";
const port = process.env.PORT || 5500;


app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

mongoose.set("strictQuery", false);

app.use("/crypto", cryptoRouter);


app.get("/", (req, res) => {
	res.send("hello world!");
});

app.listen(port, async () => {
	connect()
	console.log(`Listening at http://localhost:${port}`);
});







