const {handleHtmlResponse, bildRandomChapterUrl} = require('../utils/verses.utils')
const cache = require('../cache/daily.cache')
const dailyCache = new cache();

const getVerse = async () => {
    if (dailyCache.get('dlv')) {
        const cacheVerso = dailyCache.get('dlv')
        return cacheVerso;
    }

    const objResposta = bildRandomChapterUrl();
    const resposta = await fetch(objResposta.url, {
        method: "GET",
        headers: {
            "api-key": process.env.API_KEY,
        }
    });

    delete objResposta.url

    if(!resposta.ok){
        throw new error('Error ao buscas versiculo externo')
    }

    const apiResponse = await resposta.json();
    let dadoBruto = apiResponse.data.content;
    
    const verseObjectJson = await handleHtmlResponse(dadoBruto);

    objResposta.versiculo = verseObjectJson.num
    objResposta.texto = verseObjectJson.texto
    objResposta.sigPalavras = [{palavra: 'qualquer palavra', significado: 'uma definição qualquer vou colocar exemplos tambem'}]

    dailyCache.set('dlv', objResposta, 86400000)

    return objResposta;
};


module.exports = {
    getVerse
}