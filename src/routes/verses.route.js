const express = require('express');
const { getRandomVerseController } = require('../controllers/verses.controller')

const router = express.Router();

router.get('/home/verse', getRandomVerseController);

module.exports = router