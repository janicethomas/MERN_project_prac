
const mongoose = require("mongoose");
const express = require("express");
const studentRoute = require("./controller/studentRoute")
const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();

mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://testuser:testuser@cluster0.fjze42g.mongodb.net/schooldb");
var db = mongoose.connection;
db.on("open", ()=>console.log("Connected to DB"));
db.on("error", ()=>console.log("error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

app.use("/studentRoute", studentRoute)

app.listen(4000, ()=>{
    console.log("Server connected to 4000");
})