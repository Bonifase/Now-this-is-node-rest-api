const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema(
    {
        firstName: {type: String},
        lastName: {type: String},
        email: {type: String},
        password: {type: String},
        isDeleted: {type: Boolean, default: false}
    
    }
);
userModel.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
userModel.methods.validPassword = function(password) {
    return bcrypt.compareSalt(password, this.password);
}

module.exports = mongoose.model('User', userModel);