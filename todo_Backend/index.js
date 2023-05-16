const express = require('express');
const mysql = require('mysql');
const db=require('./config/Db')
var bodyParser = require('body-parser')
var cors = require('cors') 

const app = express();
const PORT=process.env.PORT || 2020
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(cors());
app.use(cors({
  origin: '*', // Replace with the allowed origin(s)
  methods: ['GET', 'POST', 'PATCH','DELETE'], // Replace with the allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Replace with the allowed headers
}));



// Create a connection to the database
  app.post('/insert/task')
  app.post('/insert/task')
  app.use("/api",require('./routes/routes'))
// Start the server
app.listen(PORT, () => {
  console.log('Server listening on port ', PORT+"!");
});
