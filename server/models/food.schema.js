const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema is a constructor

const foodSchema = new Schema ({
    name: {type: String, required: true, unique: true},
    deliciousness_rating: {type: String, required: true},
    is_hot: {type: String, required: true}
})

module.exports = mongoose.model('Food', foodSchema); //connects to the Book collection in Mongo based on 'Book' Mongo takes this, lower cases it and pluralizes it which is why this correlates to books on mongo