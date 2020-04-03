const syllable = require('syllable');

const test = "Hey there, The coronavirus pandemic has changed the economy, consumer buying behavior, and our day-to-day lives. If you’re thinking about starting a business right now, it’s critical that your business addresses these changes.That’s why we put together a list of 20 online business ideas for the coronavirus economy.The best part? These business ideas are ethical, have long-term growth potential, and help customers adapt to new lifestyles impacted by COVID-19.Entrepreneurs like you are going to be a critical part of this new economy. And we at Oberlo are here to support you."

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


function fleschKincaidReadingAge(text) {
    const asw = avgWordsPerSentence(text);
    const asl = avgSyllablesPerWords(text);
    console.log(asw)
    console.log(asl)
    const fkraIndex = (0.39 * asl) + (11.8 * asw) - 15.59;
    return fkraIndex;
}


console.log(fleschKincaidReadingAge(test));