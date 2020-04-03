function wordsInSentence(sentence) {
    if (sentence.length > 0) {
        const wordArray = sentence.split(" ")
        return wordArray.length;
    } else {
        return 0;
    }
}

function textToSentences(text) {
    const output = [];
    const sentences = text.split(".")
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].length > 0) {
            output.push(sentences[i])
        }
    }
    return output;
}


function avgWordsPerSentence(text) {
    var totalWords = 0
    const sentences = textToSentences(text);
    for (let i = 0; i < sentences.length; i++) {
        numWords = wordsInSentence(sentences[i])
        totalWords += numWords
    }
    return (totalWords / sentences.length)
}

function avgSyllablesPerWords(text) {
    const sentences = textToSentences(text)
    var totalSyllables = 0
    var totalWords = 0
    for (let i = 0; i < sentences.length; i++) {
        const words = sentences[i].split(" ")
        totalWords += words.length;
        for (let j = 0; j < words.length; j++) {
            const syllableLength = syllable(words[j])
            totalSyllables += syllableLength;
        }
    }
    return totalSyllables / totalWords;
}


module.exports = {
    wordsInSentence,
    textToSentences,
    avgWordsPerSentence,
    avgSyllablesPerWords
}