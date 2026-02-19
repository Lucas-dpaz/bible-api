const {getVerse} = require('../services/verses.service');
const successResponse = require('../utils/resposeHandler.util')

const getRandomVerseController = async (req, res, next) => {
    try {
        const dado = await getVerse();
        return successResponse(res, dado);

    } catch (e) {
        next(e)
    }
};

module.exports = {
    getRandomVerseController,
}


