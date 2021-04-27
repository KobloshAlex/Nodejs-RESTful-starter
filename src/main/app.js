const express = require("express");
const app = express();

// JSON parser
app.use(express.json());

module.exports = app;
