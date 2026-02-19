require('dotenv').config();
const express = require('express');
const router = require('./routes/verses.route');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());

app.use("/api/v1/verses",router);

app.use(errorMiddleware);

module.exports = app;