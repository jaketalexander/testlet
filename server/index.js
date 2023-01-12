require('dotenv').config();
const path = require('path');
const express = require('express');
const db = require('./db');
const logger = require('../middleware/logger.js');
const router = require('./routes.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`listening on ${PORT}`); });
