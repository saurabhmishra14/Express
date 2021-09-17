// importing express module
const express = require("express");

// Creating express  object
const app = express();

// if user req for '/' then print..
app.get("/", (req, res, next) => {
    res.send("Hello Boss");
});

// if user req for '/about' then print..
app.get("/about", (req, res, next) => {
    res.send("My name is Saurabh Mishra");
});

// if user req for '/login' then print..
app.get("/login", (req, res, next) => {
    res.send("This is login page");
});

// Server setup
app.listen(3000, () => {
    console.log("Server is Running on port: 3000");
});