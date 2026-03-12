const getMeaning = require('../services/dictionary.service');
const {getVerse} = require('../services/verses.service');
const successResponse = require('../utils/resposeHandler.util');

const getRandomVerseController = async (req, res, next) => {
    try {
        const verse = await getVerse(); 
        const meaningWords = await getMeaning(verse.texto);
        
        return successResponse(res, {verse, meaningWords});
    } catch (e) {
        next(e);
    }
};

module.exports = {
    getRandomVerseController,
}


