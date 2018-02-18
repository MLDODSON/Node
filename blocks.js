// Both sets of code accomplish the Same thing.

// non-blocking js. This code runs much faster.

var getUser = require("./getUser");

getUser("123", function (user1) {
	console.log("user1", user1);
});

getUser("321", function (user2) {
	console.log("user2", user2);
});

var sum = 3 + 2;
console.log("The sum is " + sum + ".");


//Run code in the terminal


//This is blocking js. It is less efficient and goes through more steps.
var getUserSync = require("./getUserSync");

var user1 = getComputedStyle("123"); 
console.log("user1", user1);


var user2 = getComputedStyle("321"); 
console.log("user2", user2);

var sum = 3 + 2;
console.log("The sum is " + sum + ".");

// Both sets of code accomplish the Same thing.