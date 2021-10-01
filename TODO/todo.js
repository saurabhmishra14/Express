const express = require('express');
const app = express();
const PORT = 3000;
const todo = [];
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    console.log(todo);

});

app.post('/post', (req, res) => {
    let task = { //when defining object outside gives muktiply array elements
        ID: todo.length + 1,
        Name: req.body.task
    };
    todo.push(task);
    res.redirect('/');
});

app.put('/put', (req, res) => {
    let id = req.body.id;
    let task = req.body.task;
    if (id >= 1) {
        console.log(`${todo[id-1].Name} update as ${task}`);
        todo[id - 1].Name = task;
    }
    res.redirect('/');
});

app.delete('/delete/', (req, res) => {
    let id = req.body.id;
    if (id >= 1) {
        console.log(`Deleted Task is ${todo[id-1].Name} `);
           
        for (let i = id; i < todo.length; ++i) {
            (todo[i].ID) --;
        }
        todo.splice(id - 1, 1);
    }
    res.redirect('/');
});

app.listen(3000, () => console.log("Running on port", 3000));