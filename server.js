'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const server = express();
const PORT = process.env.PORT;
server.use(cors());

// Middleware to decode any request body to json(with Post req)
server.use(express.json());

mongoose.connect(`${process.env.MONGO_SERVER}`);

const bookModal = require('./modules/BookDb.js')
const { getBooksHandler, addBookHandler, deleteBookHandler,} = require("./modules/BookFunction.js");

// localhost:3004/books?email=
server.get('/', homeHandler);
server.get('/books', getBooksHandler);
server.post('/addBook', addBookHandler);
server.delete('/deleteBook', deleteBookHandler);


function homeHandler(req, res) {
    res.status(200).send(`It's Working!`);
}

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})