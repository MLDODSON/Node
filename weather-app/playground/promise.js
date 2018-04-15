var somePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Hey! This actually worked!");
		reject("Sorry, unable to fulfill promise.");
	}, 3000);
});

somePromise.then((message) => {
	console.log("Success: ", message);
	}, (errorMessage) => {
	console.log("Error: ", errorMessage);
});