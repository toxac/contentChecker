const syllable = require('syllable');
const textProcessing = require('../utils/textProcessing');

const test = "Our brains react to our world in milliseconds—faster than we’re consciously aware. And much of what drives our everyday decisions, including what we’ll watch, talk about and buy, are the emotional responses that traditional self-report methods alone can’t measure. That’s where consumer neuroscience comes in, a field that Nielsen has been in for nearly 10 years. Through neuroscience, we help brands understand consumers’ non-conscious engagement and responses, which they can use to create stronger connections with their audiences.We integrate best-in-class neuroscience technologies with traditional research methods, so that we, along with our clients, will learn faster, develop better testing protocols and deliver stronger results than anyone in the industry."

function fkraInferences(score) {

}

function fleschKincaidReadingAge(text) {
    const avgWordsInSentence = textProcessing.avgWordsPerSentence(text);
    const avgSyllables = textProcessing.avgSyllablesPerWords(text);
    const fkraIndex = (0.39 * avgWordsInSentence) + (11.8 * avgSyllables) - 15.59;
    return fkraIndex;
}


console.log(fleschKincaidReadingAge(test));