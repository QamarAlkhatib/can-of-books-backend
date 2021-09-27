'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const server = express();
const PORT = process.env.PORT;
server.use(cors());
// const bookSchema = require('./module/BookSchema.js');
// const ModalBook = require('./module/ModalBook.js')

mongoose.connect('mongodb://localhost:27017/book');


server.get('/',homeHandler)
function homeHandler(req,res){
    res.status(200).send(`It's Working!`);
}


server.listen(PORT, () =>{
    console.log(`Listening on PORT ${PORT}`);
})