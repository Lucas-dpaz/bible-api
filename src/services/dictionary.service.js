const spanishCommonBiblicalDictionary = require("../data/dictionary");
const { textToWords, handleDictionaryResponse } = require("../utils/dictionary.util");

const getMeaning = async (text) => {
    const wordWithMeaning = [];
    const words = textToWords(text);

    for (const word of words) {
        const found = spanishCommonBiblicalDictionary.find(n => n.word === word);

        if (found) {
            wordWithMeaning.push({
                word: word,
                meaning: found.meaning
            })
        } else {
            const wordMeaning = await fetch(`https://lexicala1.p.rapidapi.com/search-definitions?text=${word}&language=es`, {
                method: "GET",
                headers: {
                    "x-rapidapi-host" : "lexicala1.p.rapidapi.com",
                    "x-rapidapi-key" : process.env.RAPID_API_KEY
                }
            })

            const data = await wordMeaning.json();

            if (!data.results) {
                console.log("limit de busca diario alcançado")
                continue
            }

            const meaning = handleDictionaryResponse(data)
        
            wordWithMeaning.push(
                {
                    word: word,
                    meaning: meaning
                }
            )
        }
    }

    return wordWithMeaning;
}

module.exports = getMeaning;