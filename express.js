let express = require("express");
let app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
	res.send("Goodbye!");
});

// "/dog" => "RUFF!"
app.get("/dog", function(req, res) {
	console.log("Someone made a request to /dog!");
	res.send("RUFF!");
});

app.get("/r/:subredditName", function(req, res) {
	var subreddit = req.params.subredditName;
	res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
	console.log(req.params);
	res.send("WELCOME TO THE COMMENTS PAGE!");
});

app.get("*", function(req, res) {
	res.send("BABY YOU ARE A STAR!");
});

//Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server has started!!!");
});



















