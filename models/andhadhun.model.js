const mongoose = require('mongoose');

module.exports = mongoose.model('People',{
    Name: { type: String },
    AccountNumber: { type: Number },
    ProfileImg: { type:Buffer}
} )