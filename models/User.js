const mongoose = require('mongoose');


const userSchema = mongoose.Schema({

    name: { type: String, required: true, min: 3, max: 50 },
    email: { type: String, required: true, min: 10, max: 12 },
    password: { type: String, required: true, min: 6, max: 100 },
    createdAt: { type: String, default: Date.now }
})

module.exports = mongoose.model('User', userSchema)