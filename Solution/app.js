let express = require("express");
let app = express();

app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
	let animal = req.params.animal;
	let noise = "";
	if(animal === "lion") {
		noise = "roar";
	} else if(animal === "pig") {
		noise = "oink";
	} else if(animal === "cat") {
		noise = "meow";
	}
	res.send("The " + animal + " says " + noise + ".");
});

app.get("/talk/:hero", function(req, res) {
	var sayings = {
		Harry: "Go ahead, make my day!",
		Superman: "Up, up and away!",
		Wolverine: "Watch it bub!",
		Thing: "It is Clobberin Time!"
	};
	
	var hero = req.params.hero;
	var saying = sayings[hero];
	res.send(hero + " says '" + saying + "'");
});

app.get("/repeat/:message/:times", function(req, res) {
	var message = req.params.message;
	var times = Number(req.params.times);
	var result = "";
	
	for(var i = 0; i < times; i++) {
		result += message + " ";
	}
	res.send(result);
});

app.get("*", function(req,res) {
	res.send("Sorry, page not found... Get it together!");
});



app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Now serving your app!");
});





























