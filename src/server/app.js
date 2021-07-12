const path = require("path");
require("dotenv").config({path: path.join(__dirname, "..", ".env")});

const express = require("express");
const notFound = require("./errors/notFound")
const errorHandler = require("./errors/errorHandler")

const app = express();

app.use(express.json());

app.get("/bundle.js", (req, res) => {
    res.sendFile(path.join(__dirname, "/out/bundle.js"));
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;