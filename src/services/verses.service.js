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
    let dadoBruto = apiResponse.data.content;
    
    const verseObjectJson = await handleHtmlResponse(dadoBruto);

    const respostaFinal = {
        livro: objResposta.livro,
        capitulo: objResposta.capitulo,
        versiculo: verseObjectJson.num,
        texto: verseObjectJson.texto,
        sigPalavras: [{palavra: 'qualquer palavra', significado: 'uma definição qualquer vou colocar exemplos tambem'}]
    }

    return respostaFinal;
};


module.exports = {
    getVerse
}