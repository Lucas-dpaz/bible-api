const express = require('express');
const { getRandomVerseController } = require('../controllers/verses.controller');

const router = express.Router();

router.get('/random', getRandomVerseController);

module.exports = router