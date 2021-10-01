'use strict'

const bookModal = require('./BookDb.js')


function getBooksHandler(req, res) {

    let UserEmail = req.query.email;
    bookModal.find({ email: UserEmail }, function (error, allData) {
        if (error) {
            console.log('Error with getting the data', error);
        }
        else {
            console.log(allData);
            res.send(allData);
        }
    })
}

// http://localhost:3004/addbook?email=${this.state.email}&title=${bookName}&description=${bookDescription}
// http://localhost:3004/addbook
 function addBookHandler(req, res) {
    console.log(req.body)
    let { email, title, description } = req.body;
    // way 1
    // const newBook = new bookModal({
    //     email, 
    //     title,
    //     description,
    // });
    // await newBook.save();

    // way 2 -create, (needs time) save and create at the same time
     bookModal.create({ email, title, description }).then(()=>{

         bookModal.find({ email },(function (error, allData) {
             if (error) {
                 console.log('Error with getting the data', error);
             }
             else {
                 console.log(allData);
                 res.send(allData);
             }
        }))
     })
}

// http://localhost:3004/deleteBook?bookId=${bookId}email=${this.state.email}
function deleteBookHandler(req, res) {
    let bookId = req.query.bookId;
    let email = req.query.email;

    bookModal.deleteOne({ _id: bookId }).then(() => {
        bookModal.find({ email },(function (error, allData) {
            if (error) {
                console.log('Error with getting the data', error);
            }
            else {
                console.log(allData);
                res.send(allData);
            }
       }))
    })
}

function updateBookHandler(req,res){
    console.log('update',req.body);

    let 


    
}
module.exports = {getBooksHandler,addBookHandler,deleteBookHandler,updateBookHandler};