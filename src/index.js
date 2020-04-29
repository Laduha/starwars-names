var uniqueRandomArray = require('unique-random-array');
var starwarsNames = require('./starwars-name.json');

module.exports = {
    all: starwarsNames,
    random: uniqueRandomArray(starwarsNames),
}