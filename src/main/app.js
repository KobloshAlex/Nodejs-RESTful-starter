const express = require("express");
const route = require("./routes/routes");

// express app
const app = express();

// JSON parser
app.use(express.json());

// routes
app.use(process.env.START_URL, route);
module.exports = app;
