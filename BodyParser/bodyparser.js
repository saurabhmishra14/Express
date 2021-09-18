let express = require('express');
let app = express();

// For POST-Support
let bodyParser = require('body-parser');

app.use(bodyParser.json());//   For JSON        
app.use(bodyParser.urlencoded({ extended: false}));//Parse the request body into JS Object ( if content-type is application/JSON)
//app.use(bodyParser.urlencoded({ extended: false }));
app.post('/', (request, response) => {
    let name = request.body.name;
    let age= request.body.age;
    
    console.log(' Name: ',name);
    console.log(' Age: ',age);
    
});

app.listen(3000);
