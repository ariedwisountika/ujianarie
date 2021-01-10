const mongoose = require('mongoose');

const ModelSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'Your Name',
    },
    email: {
        type: String,
        default: 'email@gmail.com',
    },
    phone: {
        type: String,
        default: 'Phone Number',
    },
    address: {
        type: String,
        default: 'Jakarta'
    }
})

module.exports = mongoose.model("Model", ModelSchema);