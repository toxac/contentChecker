"use strict";
const fkra = require('./algorithms/fkra');
const fre = require('./algorithms/fre')

module.exports = function contentChecker(text) {
    var result = { fkra: null, fre: null }
    result.fkra = fkra(text);
    result.fre = fre(text)
    return result
}