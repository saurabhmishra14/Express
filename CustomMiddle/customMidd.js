const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const arr = ["Saurabh", "Deepak", "Shivam", "Don", "Shakitiman"];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res,next) {
    console.log("Middleware called1");
    next();
});

app.use('/api', function (req, res,next) {
    console.log("Middleware called2");
    next();
});

app.get('/', (req, res) => {
    console.log("Get request is called");
});

app.post('/', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
     console.log(`Post request \n name & age is ${name} ${age}`);
});

app.put('/api/put/:id', (req, res) => {
    let id = req.params.id;
    if (id >= 0 && id < arr.length) {
        arr[id] = req.body.name;
    }
    console.log(`Put request Made: ${arr}`);
});

app.delete('/api/delete/:id', (req, res) => {
    let id = req.params.id;
    if (id >= 0 && id < arr.length) {
        arr.splice(id, 1);
    }
    console.log(`Delete Request Made: ${arr}`);
});

app.listen(3000, () =>
    console.log("Running on port",3000));