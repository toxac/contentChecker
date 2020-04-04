/*
  Description: The Flesch Reading Ease Readability Formula
  version:0.1.3
  author: toxac @github
*/

const textProcessing = require('../utils/textProcessing');


function freCalculator(text) {
    const avgWordsInSentence = textProcessing.avgWordsPerSentence(text);
    const avgSyllables = textProcessing.avgSyllablesPerWords(text);
    const freIndex = 206.835 - (1.015 * avgWordsInSentence) - (84.6 * avgSyllables)
    return freIndex;
}

function freTest(text) {
    const score = freCalculator(text)
    var result = { "test": "Flesch Kinkaid Reading Age", "score": score, "inference": "" }
    if (score >= 90 && score <= 100) {
        result.inference = "text can be easily understandable by an average 5th grader"
    } else if (score < 90 && score >= 70) {
        result.inference = "text can be easily understandable by an average 6th and 7th grader"
    } else if (score < 70 && score >= 60) {
        result.inference = "text can be easily understandable by an average 8th and 9th grader"
    } else if (score < 60 && score >= 30) {
        result.inference = "text can be easily understandable by an average high school student"
    } else if (score < 30) {
        result.inference = "text can be easily understandable by person with college education or higher"
    } else {
        result.inference = "error"
    }

    return result

}

module.exports = freTest;