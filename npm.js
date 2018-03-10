// Practice with npm

/*
var fake = require("faker");

console.log("*************************");
console.log("THIS STORE IS EXPENSIVE!!");
console.log("*************************");

for(var i = 0; i < 10; i++) {
   console.log(fake.commerce.product() + " - $" + fake.commerce.price() + " - " + fake.commerce.department()); 
}
*/

//var cat = require("cat-me");
//console.log(cat());

//var joke = require("knock-knock-jokes");
//console.log(joke());

//let sw = require('star-wars-quotes');
//console.log(sw());


//let oneLinerJoke = require('one-liner-joke');

//let getRandomJoke = oneLinerJoke.getRandomJoke();

//console.log(getRandomJoke);

//let oneLinerJoke = require('one-liner-joke');
//let getRandomJoke = oneLinerJoke.getRandomJoke();

//for(var i = 0; i < 10; i++) {
	//console.log(getRandomJoke);
//}

let sw = require('star-wars-quotes');

for(var i = 0; i < 5; i++) {
	
	console.log(sw());
}