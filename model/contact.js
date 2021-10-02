const mongoose = require('mongoose');

// ! membuat schema
const Contact = mongoose.model('contacts', {
    nama: {
        type: String,
        required: true
    },
    nohp: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
});

module.exports = {
    Contact
};