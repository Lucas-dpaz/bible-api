const {handleHtmlResponse, bildRandomChapterUrl} = require('../utils/verses.util')
const AppError = require('../errors/AppError')


const getVerse = async () => {
    const objResposta = bildRandomChapterUrl();
    const resposta = await fetch(objResposta.url, {
        method: "GET",
        headers: {
            "api-key": process.env.API_KEY,
        }
    });

    if(!resposta.ok){
        throw new AppError('Error ao buscas versiculo externo', 502)
    }

    const apiResponse = await resposta.json();
    let dadoBruto = apiResponse.data?.content;
    
    let verseObjectJson;
    try {
        verseObjectJson = await handleHtmlResponse(dadoBruto);
    } catch (err) {
        // transforma qualquer erro de parsing em AppError para o controller
        throw new AppError('Erro ao interpretar conteúdo HTML do versículo', 502);
    }

    const respostaFinal = {
        livro: objResposta.livro,
        capitulo: objResposta.capitulo,
        versiculo: verseObjectJson.num,
        texto: verseObjectJson.texto,
    }

    return respostaFinal;
};


module.exports = {
    getVerse
}