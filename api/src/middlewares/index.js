const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(cors({ origin: "*" }));

app.use(express.json({ limit: "950mb" }));

app.use(morgan("combined"));


module.exports = app;