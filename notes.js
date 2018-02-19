//https://nodejs.org/api/ for a list of node.js modules



console.log("Starting App!");

const fs = require("fs");
const os = require("os");


var user = os.userInfo();


//fs.appendFileSync("greetings.txt", "Hello " + user.username + "!");

//Or it can be done this way for ES 6.
fs.appendFileSync("greetings.txt", `Hello ${user.username}!`);


/*
fs.appendFile("greetings.txt", "What is shakin bacon?", function (err) {
	if (err) {
		console.log("Unable to write to file.");
	}
});
*/