console.log("Starting notes2.js!");

const fs = require("fs");

var fetchNotes = () => {
	try {
	  var notesString = fs.readFileSync("notes-data.json");
	  return JSON.parse(notesString);
	} catch (e) {
		
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};


//This is an arrow function
var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	
	var duplicateNotes = notes.filter((note) => note.title === title);
	
	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
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