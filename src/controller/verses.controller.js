const {getVerse} = require('../service/verses.service');

const getRandomVerseController = async (req, res) => {
    try {
        const resposta = await getVerse();
        res.status(200).json(resposta);
    } catch (error) {
        console.log(`error: ${error.message}`);
        res.status(500).json({error: 'Erro ao buscar versículo'})
    }
};

module.exports = {
    getRandomVerseController,
}


