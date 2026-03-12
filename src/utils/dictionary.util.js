function textToWords (text) {
    const txt = text.toLowerCase();
    let wordsList = txt.split(" ");
    wordsList = wordsList.map(n => n.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^\w]/g, ""));

    const uniqWordsList = [...new Set(wordsList)].filter(Boolean)

    return uniqWordsList;
}

function handleDictionaryResponse (meaningList) {
    const twoMeaning = meaningList.results.slice(0, 2);
    return twoMeaning
}

module.exports = {textToWords, handleDictionaryResponse}