const textProcessing = require('../utils/textProcessing');


function fkraCalculator(text) {
    const avgWordsInSentence = textProcessing.avgWordsPerSentence(text);
    const avgSyllables = textProcessing.avgSyllablesPerWords(text);
    const fkraIndex = (0.39 * avgWordsInSentence) + (11.8 * avgSyllables) - 15.59;
    return fkraIndex;
}

function fkraTest(text) {
    const score = fkraCalculator(text)
    var result = { "test": "Flesch Kinkaid Reading Age", "score": score, "inference": "" }
    if (score < 1) {
        result.inference = "The content is suitable for users who are in preschool to first grade"
    } else if (score > 10 && score < 13) {
        result.inference = "The content is suitable for users who are in high school"
    } else if (score >= 13) {
        result.inference = "The content is suitable for users who have college education and above"
    } else {
        result.inference = `The content is suitable for users who are in ${Math.round(score)} grade`
    }
    return result

}




module.exports = fkraTest;