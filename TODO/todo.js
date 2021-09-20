var express = require('express');
var app = express();
var PORT = 3000;
let arr = [];

let bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))



app.get('/', (req, res) => {
    console.log(arr);

});

app.post('/post', (req, res) => {
    let task = {
        ID: arr.length + 1,
        Name: req.body.task
    };


    arr.push(task);
    res.redirect('/');


});


app.put('/put', (req, res) => {
    let id = req.body.id;
    let task = req.body.task;
    if (id >= 1) {
        console.log(`${arr[id-1].Name} update as ${task}`);
        arr[id - 1].Name = task;
    }
    res.redirect('/');

});


app.delete('/delete/', (req, res) => {
    let id = req.body.id;
    if (id >= 1) {
        console.log(`Deleted Task is ${arr[id-1].Name} `);

        for (let i = id; i < arr.length; ++i) {
            (arr[i].ID) --;
        }
        arr.splice(id - 1, 1);
    }
    res.redirect('/');
});

app.listen(3000, () =>
    console.log("Running on port", 3000));