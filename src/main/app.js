const express = require("express");
const route = require("./routes/routes");

// express app
const app = express();

// JSON parser
app.use(express.json());

// routes
const URL_PREFIX = "/api/v1/test";
app.use(URL_PREFIX, route);
module.exports = app;
