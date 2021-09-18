const express = require("express");
require("dotenv").config();//it make linkage between the current file .env

const app = express();
const port = process.env.PORT ;//process.env takes the value of PORT from .env files


app.listen(port, () => {
  console.log('Server is running on the port :',port);
});