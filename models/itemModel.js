const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemModel = new Schema(
    {
        title: {type: String},
        category: {type: String},
        price: {type: String},
        quantity: {type: String},
        description: {type: String}
    
    }
);

module.exports = mongoose.model('Item', itemModel);