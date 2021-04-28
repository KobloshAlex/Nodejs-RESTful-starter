const express = require("express");
const route = require("./routes/routes");
const logger = require("../../resources/logger");

// express app
const app = express();

// JSON parser
app.use(express.json());

// routes
app.use(process.env.START_URL, route);
logger.info(`${process.env} `);
module.exports = app;
