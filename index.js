const myInformation = require('./information.js');
const myObject = require('./information.js');

const cowsay = require("cowsay");

console.log(cowsay.say({
	text : 
		`Hi, my name is ${myObject.name}, and I studies at ${myObject.campus}.`,
	e : "oO",
	T : "U ",
}));
