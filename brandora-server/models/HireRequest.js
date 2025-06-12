const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    companyOrProject: {
        type: String
    },
    budget: {
        type: String
    },
    serviceRequired: {
        type: String
    },
    message: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('HireMe', schema);