const request = require("request");

request({
	url: "https://maps.googleapis.com/maps/api/geocode/json?address=2107%20East%20Adelaide%20Saint%20Louis",
	json: true
}, (error, response, body) => {
	console.log(body);	
});