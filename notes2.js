console.log("Starting notes2.js!");

//module.exports.age = 50;

//This is an arrow function
var addNote = (title, body) => {
	console.log("Adding Note", title, body);	
};

var getAll = () => {
	console.log("Getting all notes");	
};

var getNote = (title) => {
	console.log("Getting note", title);	
};

var removeNote = (title) => {
	console.log("Removing Note", title);	
};


module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};