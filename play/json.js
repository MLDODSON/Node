/*
var obj = {
	name: "Glenny"
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);
*/

/*
var personString = '{"name": "Glenny", "age": 44}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);

var placeString = '{"place": "Puerto Plata", "country": "Dominican Republic"}';
var place = JSON.parse(placeString);
console.log(typeof place);
console.log(place);
*/

const fs = require("fs");

var originalNote = {
	group: "Funkadelic",
	music: "Funk",
	transportation: "Spaceship"
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteString);

var noteString = fs.readFileSync("notes.json");
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.group);
console.log(note.music);
console.log(note.transportation);