var express = require('express');
var app = express();
var PORT = 3000;
let arr = ["Saurabh", "Deepak", "Shivam", "Don", "Shakitiman"];

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

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

app.post('/api/post/', (req, res) => {
    let name = request.body.name;
    let age = request.body.age;

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