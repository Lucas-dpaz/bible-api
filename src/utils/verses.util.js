const books = require('../data/livros.data')
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const getRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

    return randomNumber;
};

function bildRandomChapterUrl () {
    let url;

    const livroAleatorio = getRandomNumber(0, (books.length - 1));
    const capAleatorio = getRandomNumber(1, books[livroAleatorio].numCap);

    const objLivroEUrl = {
        livro: books[livroAleatorio].nome,
        capitulo: capAleatorio,
        url: `https://rest.api.bible/v1/bibles/592420522e16049f-01/chapters/${books[livroAleatorio].livro}.${capAleatorio}`,
    }

    return objLivroEUrl;
};

function handleHtmlResponse (htmlText) {
    if (!htmlText || typeof htmlText !== 'string') {
        throw new Error('handleHtmlResponse recebeu htmlText inválido');
    }

    const dom = new JSDOM(htmlText);
    const listaVersos = [];
    const versos = dom.window.document.querySelectorAll('p.p');

    if (!versos || versos.length === 0) {
        throw new Error('Nenhum elemento <p class="p"> encontrado no HTML');
    }

    versos.forEach((p, index) => {
        // limpa possíveis marcações internas
        p.querySelector('span.v')?.remove();

        listaVersos.push({
            verso: index + 1,
            conteudo: p.textContent.trim()
        });
    });

    if (listaVersos.length === 0) {
        throw new Error('Lista de versos ficou vazia após processamento');
    }

    const numeroAlea = getRandomNumber(0, listaVersos.length - 1);
    const objverso = {
        num: numeroAlea,
        texto: listaVersos[numeroAlea].conteudo
    };

    return objverso;
};



module.exports = {
    handleHtmlResponse,
    bildRandomChapterUrl
}