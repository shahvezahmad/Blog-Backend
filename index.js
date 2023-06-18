const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require("./Routes/blog");

//mount
app.use("/api/v1", blog);

const connectWithDb = require("./Config/database");
connectWithDb();

app.listen(PORT, () =>{
    console.log("app started succesfully");
})

app.get("/", (req,res) =>{
    res.send(`<h1> this is my homepage`)
})