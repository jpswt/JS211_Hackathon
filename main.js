'use strict';

// Readline Module in Node.js allows the reading of input stream line by line.
// brings in the assert module for unit testing
const { count } = require('console');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
// Declare the countLetters function that will count the number of times a letter appears in a sentence input
const countLetters = (sentence) => {
	// sentence is equal to the sentence input in lowercase, trim whitespace and
	// replace all non-letters to empty string via regex.  This eliminates all spaces
	// numbers and punctuation from sentence.
	sentence = sentence
		.toLowerCase()
		.trim()
		.replace(/[^a-zA-Z]/gm, '');
	// create a variable for count and set it equal to empty object
	let count = {};
	// create a variable of that takes sentence input and splits each letter
	// and then sorts them alphabetically
	let sortedLetters = sentence.split('').sort();
	// using the forEach method, for each sorted letter from sentence input the
	// count is determined.  If the letter key is not present in count, the letter key
	// is added to count and given value of 1.  If the letter key is present in the count,
	// the value of 1 is added to letter key current value.
	sortedLetters.forEach((letter) => {
		count[letter] = count[letter] ? count[letter] + 1 : 1;
	});
	// count for each letter is returned
	return count;
};
// Declare the objToString function that will convert the count object to string
const objToString = (countLetters) => {
	// create and empty string
	let string = '';
	// for every key in the object, if the object key is greater or equal to one (is present);
	// then add that key and its value to the string
	for (let key in countLetters) {
		if (countLetters[key] >= 1) {
			string += `${key}:${countLetters[key]} `;
		}
	}
	// return to output string
	return string;
};

// Declare function that displays the final count of the string inputted by user
// Call the countLetters function to determine the letter and value and
// stores result in output variable that is converted to a string and logged on the console.
const finalCount = (str) => {
	let output = countLetters(str);
	console.log(objToString(output));
};

// user prompt for an input string
const getPrompt = () => {
	// prompt user to enter an input string with callback function that takes the string
	// and runs it through the final count function
	rl.question('Enter a sentence: ', function (answer) {
		finalCount(answer);
		getPrompt();
	});
};
// always returns ask the user for another input
getPrompt();
