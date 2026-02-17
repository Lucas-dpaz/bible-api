const books = require('../database/livro.database')
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
    const dom = new JSDOM(htmlText);

    const listaVersos = [];

    const versos = dom.window.document.querySelectorAll('p.p');


    versos.forEach((p, index) => {
        p.querySelector('span.v')?.remove();

        listaVersos.push({
            verso: index + 1,
            conteudo: p.textContent.trim()
        })
    })

    const numeroAlea = getRandomNumber(0, listaVersos.length - 1);
    
    const objverso = {
        num: numeroAlea,
        texto: listaVersos[numeroAlea].conteudo
    }

    return objverso
};

module.exports = {
    handleHtmlResponse,
    bildRandomChapterUrl
}