const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        minLength: 3,
        maxLength:512,
    },
    auther:{
        type: String,
        minLength: 3,
        maxLength:512,
    },
    price:{
        type: String,
        minLength: 3,
        maxLength:512,
    },
    genre:{
        type:String,


    }
})

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;