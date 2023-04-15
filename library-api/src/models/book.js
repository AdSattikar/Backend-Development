const mongoose = require("mongoose")


const booksSchema = new mongoose.Schema({
    title: {
        type: String,

    },
    author: {
        type: String,
    },
    publisher: {
        type: String,

    },
    publishedDate: {
        type: Date,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    availableCopies: {
        type: Number,
        required: true,
        min: 0,
    },
    issuedCopies: {
        type: Number,
        default: 0,
    },
    floor: {
        type: Number,
    },
    shelf: {
        type: Number,
    }
})

const Book = new mongoose.model('Book', booksSchema);

module.exports = Book