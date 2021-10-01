const express = require('express');
const app = express();
const PORT = 3000;

app.use(function (req, res, next) {
	console.log("Middleware called")
	next();
});

app.get('/user', function (req, res, next) {
	console.log("/user request called");
	res.send('Welcome');
});

app.get('/login', function (req, res) {
	console.log("Login");
	res.send("login page");
});

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});