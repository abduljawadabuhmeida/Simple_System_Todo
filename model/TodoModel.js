const mongoose = require('mongoose')
const todoSchema = require('../schema/TodoSchema')



const Todo = mongoose.model('Todo', todoSchema)



module.exports = Todo