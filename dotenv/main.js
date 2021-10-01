const express = require("express");
const app = express();
require("dotenv").config();//it make linkage between the current file .env
const port = process.env.PORT;

app.listen(port, () => {
  console.log('Server is running on the port :',port);
});