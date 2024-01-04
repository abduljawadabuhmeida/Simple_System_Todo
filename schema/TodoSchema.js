const mongoose = require('mongoose')
const Schema = mongoose.Schema


const todoSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
    }

})

module.exports = todoSchema