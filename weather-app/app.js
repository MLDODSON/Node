/*
const yargs = require("yargs");

const geocode = require("./geocode/geocode");

const argv = yargs
	.options({
		a: {
		  demand: true,
		  alias: "address",
		  describe: "Address to fetch weather for",
		  string: true
		}
	})

	.help()
	.alias("help", "h")
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(results, undefined, 2));
	}
});
*/

// f640fd409b5ebdb843aec77544476512

const request = require("request");

request({
	url: "https://api.darksky.net/forecast/f640fd409b5ebdb843aec77544476512/38.5844866,-90.266699",
	json: true
}, (error, response, body) => {
	if (!error && response.statusCode === 200) {
		console.log(body.currently.temperature);
	} else {
		console.log("Unable to fetch weather.");
	}
});