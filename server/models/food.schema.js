const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema is a constructor

const foodSchema = new Schema ({
    foodName: {type: String},
    foodDeliciousness: {type: Number},
    foodIsHot: {type: Boolean}
});

module.exports = mongoose.model('Food', foodSchema); 