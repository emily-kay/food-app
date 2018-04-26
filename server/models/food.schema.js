const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema is a constructor

const foodSchema = new Schema ({
    foodName: {type: String},
    foodDeliciousness: {type: Number},
    foodIsHot: {type: String}
});

module.exports = mongoose.model('Food', foodSchema); 