const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSessionModel = new Schema(
    {
        userId: {type: Number, default: -1},
        timeStamp: {type: Date, default: Date.now()},
        isDeleted: {type: Boolean, default: false}
    
    }
);

module.exports = mongoose.model('UserSession', userSessionModel);