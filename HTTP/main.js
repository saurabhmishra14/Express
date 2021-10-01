const http = require("http"); //Importing http module to create server with help of it.
const url = require('url');

http.createServer((req, res) => { //CreateServer with the help of http module,callback function resposded whenever we call it in local machine
    let clientRequestPath = url.parse(req.url).pathname; //Provide the pathname of the requested url
       
    switch (clientRequestPath) {
        case '/': //denote the localhost:3000
            res.write("Hello World"); //.write is used to print in created server
            break;

        case '/about': //denote the localhost:3000
            res.write("My name is Saurabh Mishra");
    }
    res.end();
}).listen(3000, () => {
    console.log("Running on port :3000")
}); //as we created the server by "createserver" we can acessed it by localhost:3000