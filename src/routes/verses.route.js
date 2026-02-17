const express = require('express');
const { getRandomVerseController } = require('../controllers/verses.controller')

const route = express.Router();

route.get('/home/verse', getRandomVerseController);

module.exports = route