'use strict'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const server = express();
const PORT = process.env.PORT;
server.use(cors());

mongoose.connect('mongodb://localhost:27017/book');


const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    email: String,
    
});

const bookModal = mongoose.model('Book', bookSchema);

function seedBookInfo(){

    const book1 = new bookModal({
        title: 'life 3.0',
        description:'Being Human in the Age of Artificial Intelligence',
        email: 'qalkhatib0@gmail.com',
        
    });

    const book2 = new bookModal({
        title: 'Don\'t Make me Think',
        description:'Don\'t Make Me Think is a book by Steve Krug about human–computer interaction and web usability. The book\'s premise is that a good software program or web site should let users accomplish their intended tasks as easily and directly as possible.',
        email: 'qalkhatib0@gmail.com',
        
    });

    const book3 = new bookModal({
        title: 'Thinking Fast And Slow',
        description:'Thinking Fast And Slow shows you how two systems in your brain are constantly fighting over control of your behavior and actions, and teaches you the many ways in which this leads to errors in memory, judgment and decisions, and what you can do about it.',
        email: 'qalkhatib0@gmail.com',
        
    });
    book1.save();
    book2.save();
    book3.save();
}

// seedBookInfo();

// localhost:3004/books
server.get('/',homeHandler);
server.get('/books', getBooksHandler);

function getBooksHandler(req,res){
    bookModal.find({},function(error,allData){
        if(error){
            console.log('Error with getting the data', error);
        }
        else{
            console.log(allData);
            res.send(allData);
        }
    })
}

function homeHandler(req,res){
    res.status(200).send(`It's Working!`);
}


server.listen(PORT, () =>{
    console.log(`Listening on PORT ${PORT}`);
})