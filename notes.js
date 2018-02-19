//https://nodejs.org/api/ for a list of node.js modules



console.log("Starting notes.js!");

const fs = require("fs");
const os = require("os");
const notes2 = require("./notes2.js");

//var res = notes2.addNote();
//console.log(res);

var math = notes2.add(8, 2);
console.log(math);


//var user = os.userInfo();


//fs.appendFileSync("greetings.txt", "Hello " + user.username + "!");

//Or it can be done this way for ES 6.
//fs.appendFileSync("greetings.txt", `Hello ${user.username}! You are ${notes2.age}.`);


/*
fs.appendFile("greetings.txt", "What is shakin bacon?", function (err) {
	if (err) {
		console.log("Unable to write to file.");
	}
});
*/