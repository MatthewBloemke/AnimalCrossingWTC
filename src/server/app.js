const path = require("path");
const fs = require('fs');
require("dotenv").config({path: path.join(__dirname, "..", "..", ".env")});

const express = require("express");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

const app = express();

app.use(express.json());

fs.readdirSync('./src/server/out').forEach(file => {
    app.get(`/${file}`, (req, res) => {
        res.sendFile(path.join(__dirname, `/out/${file}`));
    });
});


app.use(notFound);
app.use(errorHandler);

module.exports = app;