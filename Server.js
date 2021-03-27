const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://apranavan:apranavan@cluster0.lspwg.mongodb.net/store-kat", { useUnifiedTopology: true, useNewUrlParser: true })

app.use("/", require("./Route")) 

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})