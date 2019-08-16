const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, require: true},
    authors: { type: String, require: true},
    description: String,
    subtitle: String,
    image: String,
    infoLink: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;