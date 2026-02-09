const express = require('express');
const { getRandomVerseController } = require('../controller/verses.controller')

const router = express.Router();

router.get('/home/verse', getRandomVerseController);

module.exports = router